#!/bin/sh
# SSL для сайта через Let's Encrypt, nginx — контейнер магазина erbology_nginx.
#   deploy/ssl.sh init   — первый запуск: конфиг nginx, выпуск сертификата, включение HTTPS
#   deploy/ssl.sh renew  — продление (cron раз в день), перезагружает nginx только если сертификат обновился
# Запускать из корня репозитория, после `docker compose up -d --build`.
set -eu

DOMAIN=${DOMAIN:-evolor.tagumplay.com}
EMAIL=${EMAIL:-rybachuk.iaroslav@gmail.com}
NGINX=${NGINX:-erbology_nginx}
ROOT=$(cd "$(dirname "$0")/.." && pwd)

# Папки nginx магазина на хосте — берём из его монтирований
mount_src() { docker inspect -f "{{range .Mounts}}{{if eq .Destination \"$1\"}}{{.Source}}{{end}}{{end}}" "$NGINX"; }
CONF_DIR=$(mount_src /etc/nginx/conf.d)
CERTS_DIR=$(mount_src /etc/nginx/certs)
[ -n "$CONF_DIR" ] && [ -n "$CERTS_DIR" ] || { echo "У $NGINX не смонтированы /etc/nginx/conf.d и /etc/nginx/certs" >&2; exit 1; }

certbot() {
  mkdir -p "$ROOT/certbot/www" "$ROOT/certbot/conf"
  docker run --rm -v "$ROOT/certbot/www:/var/www/certbot" -v "$ROOT/certbot/conf:/etc/letsencrypt" certbot/certbot "$@"
}
reload_nginx() { docker exec "$NGINX" nginx -t && docker exec "$NGINX" nginx -s reload; }
install_cert() {
  mkdir -p "$CERTS_DIR/$DOMAIN"
  cp -L "$ROOT/certbot/conf/live/$DOMAIN/fullchain.pem" "$ROOT/certbot/conf/live/$DOMAIN/privkey.pem" "$CERTS_DIR/$DOMAIN/"
  chmod 600 "$CERTS_DIR/$DOMAIN/privkey.pem"
}

case "${1:-}" in
  init)
    cp "$ROOT/deploy/nginx/$DOMAIN.http.conf" "$CONF_DIR/$DOMAIN.conf"
    reload_nginx
    certbot certonly --webroot -w /var/www/certbot -d "$DOMAIN" --email "$EMAIL" --agree-tos --no-eff-email -n
    install_cert
    cp "$ROOT/deploy/nginx/$DOMAIN.conf" "$CONF_DIR/$DOMAIN.conf"
    reload_nginx
    echo "Готово: https://$DOMAIN/"
    ;;
  renew)
    before=$(sha256sum "$ROOT/certbot/conf/live/$DOMAIN/fullchain.pem" 2>/dev/null || true)
    certbot renew -q
    after=$(sha256sum "$ROOT/certbot/conf/live/$DOMAIN/fullchain.pem")
    if [ "$before" != "$after" ]; then install_cert; reload_nginx; fi
    ;;
  *) echo "usage: $0 init|renew" >&2; exit 1 ;;
esac
