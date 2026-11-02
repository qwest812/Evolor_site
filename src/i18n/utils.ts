import { defaultLang, langs, ui, type Lang } from './ui';

export function t(lang: Lang) {
  return ui[lang];
}

// Английский живёт в корне (/game), остальные языки — под префиксом (/ru/game).
export function localePath(lang: Lang, path = '/') {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === defaultLang ? clean || '/' : `/${lang}${clean}`;
}

// Путь страницы без языкового префикса — для переключателя языка и hreflang.
export function stripLang(pathname: string) {
  const [, first, ...rest] = pathname.split('/');
  if ((langs as string[]).includes(first)) return '/' + rest.join('/');
  return pathname;
}

// Пути для getStaticPaths в src/pages/[...lang]/: undefined даёт корень для английского.
export function langPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

export function formatDateShort(date: string | Date, lang: Lang) {
  return new Date(date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' });
}
