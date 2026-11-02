// Языки совпадают с языками игры (EvolorBack: internal/services/popup/service.go).
export const languages = {
  en: 'English',
  ru: 'Русский',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  es: 'Español',
  uk: 'Українська',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

export type FeatureKey = 'catch' | 'evolve' | 'battle' | 'pvp' | 'quests' | 'style';
export const featureKeys: FeatureKey[] = ['catch', 'evolve', 'battle', 'pvp', 'quests', 'style'];

type Feature = { title: string; short: string; long: string };

type Dict = {
  meta: { description: string };
  nav: { home: string; game: string; blog: string; about: string; language: string };
  cta: { googlePlay: string; appStore: string; discord: string; getOn: string; downloadOn: string };
  hero: { tagline: string; title: string; subtitle: string };
  home: { featuresTitle: string; screenshotsTitle: string; monstersTitle: string; monstersText: string; communityTitle: string; communityText: string; latestNews: string; allNews: string };
  features: Record<FeatureKey, Feature>;
  game: { title: string; intro: string };
  about: { title: string; lead: string; body: string[]; contactTitle: string; contactText: string };
  blog: { title: string; intro: string; readMore: string; back: string; notTranslated: string; empty: string };
  legal: { privacy: string; terms: string; deleteAccount: string; englishOnly: string; updated: string };
  del: { title: string; intro: string; steps: string[]; dataTitle: string; dataText: string; emailSubject: string; button: string };
  footer: { rights: string };
};

const en: Dict = {
  meta: { description: 'Evolor — a monster-collecting RPG. Catch, evolve and battle monsters and duel real players.' },
  nav: { home: 'Home', game: 'The Game', blog: 'News', about: 'Company', language: 'Language' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Join Discord', getOn: 'Get it on', downloadOn: 'Download on the' },
  hero: {
    tagline: 'Monster-collecting RPG',
    title: 'Catch. Evolve. Battle.',
    subtitle: 'Explore a world full of wild monsters, raise your team, and prove your strength against trainers and real players.',
  },
  home: {
    featuresTitle: 'What awaits you',
    screenshotsTitle: 'Screenshots',
    monstersTitle: 'Meet the monsters',
    monstersText: 'Dozens of monsters live in the world of Evolor, each with its own type, character and evolutions.',
    communityTitle: 'Join the community',
    communityText: 'Find battle partners, share tips and get news first on our Discord.',
    latestNews: 'Latest news',
    allNews: 'All news',
  },
  features: {
    catch: {
      title: 'Catch monsters',
      short: 'Explore locations and catch wild monsters to build your team.',
      long: 'Travel from the peaceful Wander Valley to the eerie Ghost Town. Every location has its own wild monsters, some of them rare. Weaken them in battle, throw a ball and add them to your collection.',
    },
    evolve: {
      title: 'Evolve',
      short: 'Monsters grow in battle and evolve into stronger forms.',
      long: 'Every victory brings experience. As monsters level up, their stats grow, they learn new attacks, and at key levels they evolve into a new, more powerful form.',
    },
    battle: {
      title: 'Turn-based battles',
      short: 'Types, status effects and strategy decide every fight.',
      long: 'Choose attacks wisely: type advantages multiply damage, while poison, paralysis, confusion and burns can turn the tide. Use berries and elixirs, switch monsters at the right moment.',
    },
    pvp: {
      title: 'PvP duels',
      short: 'Challenge real players to a duel.',
      long: 'Open the PvP Arena and test your team against other trainers: challenge a friend by their account ID or get matched with a random player.',
    },
    quests: {
      title: 'Quests & stadiums',
      short: 'Help the locals, explore towns and meet stadium leaders.',
      long: 'Your mom, neighbours and townsfolk have tasks for you, and every town has its own stadium with a leader waiting for a challenger.',
    },
    style: {
      title: 'Your style',
      short: 'Dress up your character with dozens of outfits.',
      long: 'Hair, headwear, glasses, tops, pants, gloves, shoes, bags — mix outfits across nine slots. Some items are sold in the shop, others can only be earned as rewards.',
    },
  },
  game: { title: 'About the game', intro: 'Evolor is a mobile RPG about catching, raising and evolving monsters. Here is what you will do in the game.' },
  about: {
    title: 'About Tagumplay',
    lead: 'We are Tagumplay, an independent game studio that makes Evolor.',
    body: [
      'We love games where every creature has its own character and every battle is a small story. Evolor is our take on the classic monster-collecting RPG: a living world, honest progression, and a community of players who battle together.',
      'We develop the game in close contact with players — many features started as ideas from our Discord. New regions, monsters and events are on the way.',
    ],
    contactTitle: 'Contact us',
    contactText: 'Questions, partnership or press inquiries — write to us:',
  },
  blog: {
    title: 'News',
    intro: 'Updates, events and development notes.',
    readMore: 'Read more',
    back: 'All news',
    notTranslated: 'This post is not yet available in your language.',
    empty: 'No posts yet.',
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    deleteAccount: 'Delete account',
    englishOnly: 'This document is available in English only.',
    updated: 'Last updated',
  },
  del: {
    title: 'Delete your account',
    intro: 'You can request deletion of your Evolor account and all associated game data at any time.',
    steps: [
      'Open the game and copy your player ID from the profile screen.',
      'Send an email to our support from the address linked to your account (if any), with the subject "Account deletion" and your player ID.',
      'We will confirm the request and delete your account within 30 days.',
    ],
    dataTitle: 'What gets deleted',
    dataText: 'Your profile, monsters, items, progress, ratings and purchase history inside the game. Payment records may be kept by Google according to its own policies. Deletion cannot be undone.',
    emailSubject: 'Account deletion',
    button: 'Email support',
  },
  footer: { rights: 'All rights reserved.' },
};

const ru: Dict = {
  meta: { description: 'Evolor — RPG про коллекционирование монстров. Лови, развивай и сражайся с монстрами, бросай вызов живым игрокам.' },
  nav: { home: 'Главная', game: 'Об игре', blog: 'Новости', about: 'О компании', language: 'Язык' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Наш Discord', getOn: 'Доступно в', downloadOn: 'Загрузите в' },
  hero: {
    tagline: 'RPG про коллекционирование монстров',
    title: 'Лови. Эволюционируй. Сражайся.',
    subtitle: 'Исследуй мир, полный диких монстров, собери свою команду и докажи силу в боях с тренерами и живыми игроками.',
  },
  home: {
    featuresTitle: 'Что тебя ждёт',
    screenshotsTitle: 'Скриншоты',
    monstersTitle: 'Знакомься с монстрами',
    monstersText: 'В мире Evolor живут десятки монстров — у каждого свой тип, характер и эволюции.',
    communityTitle: 'Присоединяйся к сообществу',
    communityText: 'Ищи соперников, делись советами и узнавай новости первым в нашем Discord.',
    latestNews: 'Последние новости',
    allNews: 'Все новости',
  },
  features: {
    catch: {
      title: 'Лови монстров',
      short: 'Исследуй локации и лови диких монстров в свою команду.',
      long: 'Путешествуй от мирной Долины странников до жуткого Города призраков. В каждой локации свои дикие монстры, есть и редкие. Ослабь монстра в бою, брось шар — и он в твоей коллекции.',
    },
    evolve: {
      title: 'Эволюция',
      short: 'Монстры растут в боях и эволюционируют в более сильные формы.',
      long: 'Каждая победа приносит опыт. С уровнем растут характеристики, монстры учат новые атаки, а на ключевых уровнях эволюционируют в новую, более мощную форму.',
    },
    battle: {
      title: 'Пошаговые бои',
      short: 'Типы, статусные эффекты и тактика решают исход боя.',
      long: 'Выбирай атаки с умом: преимущество типа умножает урон, а яд, паралич, замешательство и ожог могут переломить бой. Используй ягоды и эликсиры, меняй монстров в нужный момент.',
    },
    pvp: {
      title: 'PvP-дуэли',
      short: 'Вызывай живых игроков на дуэль.',
      long: 'Открой PvP-арену и проверь свою команду против других тренеров: вызови друга по ID аккаунта или сразись со случайным игроком.',
    },
    quests: {
      title: 'Квесты и стадионы',
      short: 'Помогай жителям, исследуй города и знакомься с лидерами стадионов.',
      long: 'У мамы, соседей и горожан найдутся для тебя поручения, а в каждом городе есть свой стадион, где лидер ждёт претендентов.',
    },
    style: {
      title: 'Твой стиль',
      short: 'Одевай персонажа в десятки нарядов.',
      long: 'Причёски, головные уборы, очки, верх, штаны, перчатки, обувь, сумки — комбинируй одежду в девяти слотах. Что-то продаётся в магазине, а что-то можно получить только в награду.',
    },
  },
  game: { title: 'Об игре', intro: 'Evolor — мобильная RPG про ловлю, прокачку и эволюцию монстров. Вот чем ты будешь заниматься в игре.' },
  about: {
    title: 'О Tagumplay',
    lead: 'Мы — Tagumplay, независимая игровая студия, которая делает Evolor.',
    body: [
      'Мы любим игры, где у каждого существа свой характер, а каждый бой — маленькая история. Evolor — наш взгляд на классическую RPG про монстров: живой мир, честная прогрессия и сообщество игроков, которые сражаются вместе.',
      'Мы развиваем игру вместе с игроками — многие функции появились из идей в нашем Discord. Впереди новые регионы, монстры и события.',
    ],
    contactTitle: 'Связаться с нами',
    contactText: 'Вопросы, партнёрство или запросы прессы — пишите нам:',
  },
  blog: {
    title: 'Новости',
    intro: 'Обновления, события и заметки о разработке.',
    readMore: 'Читать',
    back: 'Все новости',
    notTranslated: 'Эта запись пока недоступна на вашем языке.',
    empty: 'Пока нет записей.',
  },
  legal: {
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    deleteAccount: 'Удаление аккаунта',
    englishOnly: 'Этот документ доступен только на английском языке.',
    updated: 'Обновлено',
  },
  del: {
    title: 'Удаление аккаунта',
    intro: 'Вы можете в любой момент запросить удаление аккаунта Evolor и всех связанных игровых данных.',
    steps: [
      'Откройте игру и скопируйте ID игрока на экране профиля.',
      'Отправьте письмо в поддержку с адреса, привязанного к аккаунту (если есть), с темой «Удаление аккаунта» и вашим ID игрока.',
      'Мы подтвердим запрос и удалим аккаунт в течение 30 дней.',
    ],
    dataTitle: 'Что удаляется',
    dataText: 'Профиль, монстры, предметы, прогресс, рейтинги и история покупок в игре. Платёжные данные могут храниться Google согласно его собственным правилам. Удаление необратимо.',
    emailSubject: 'Удаление аккаунта',
    button: 'Написать в поддержку',
  },
  footer: { rights: 'Все права защищены.' },
};

const fr: Dict = {
  meta: { description: 'Evolor — un RPG de collection de monstres. Capturez, faites évoluer et combattez des monstres, affrontez de vrais joueurs.' },
  nav: { home: 'Accueil', game: 'Le jeu', blog: 'Actualités', about: 'Studio', language: 'Langue' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Rejoindre Discord', getOn: 'Disponible sur', downloadOn: 'Télécharger dans l’' },
  hero: {
    tagline: 'RPG de collection de monstres',
    title: 'Capturez. Évoluez. Combattez.',
    subtitle: 'Explorez un monde rempli de monstres sauvages, formez votre équipe et prouvez votre force face aux dresseurs et aux vrais joueurs.',
  },
  home: {
    featuresTitle: 'Ce qui vous attend',
    screenshotsTitle: 'Captures d’écran',
    monstersTitle: 'Rencontrez les monstres',
    monstersText: 'Des dizaines de monstres peuplent le monde d’Evolor, chacun avec son type, son caractère et ses évolutions.',
    communityTitle: 'Rejoignez la communauté',
    communityText: 'Trouvez des adversaires, partagez vos astuces et recevez les nouvelles en premier sur notre Discord.',
    latestNews: 'Dernières actualités',
    allNews: 'Toutes les actualités',
  },
  features: {
    catch: {
      title: 'Capturez des monstres',
      short: 'Explorez les lieux et capturez des monstres sauvages pour votre équipe.',
      long: 'Voyagez de la paisible Vallée des Vagabonds à l’inquiétante Ville Fantôme. Chaque lieu a ses propres monstres sauvages, parfois rares. Affaiblissez-les en combat, lancez une balle et ajoutez-les à votre collection.',
    },
    evolve: {
      title: 'Évolution',
      short: 'Les monstres progressent au combat et évoluent en formes plus puissantes.',
      long: 'Chaque victoire rapporte de l’expérience. En montant de niveau, les monstres gagnent en statistiques, apprennent de nouvelles attaques et, à certains niveaux, évoluent vers une forme plus puissante.',
    },
    battle: {
      title: 'Combats au tour par tour',
      short: 'Types, effets de statut et stratégie décident de chaque combat.',
      long: 'Choisissez bien vos attaques : l’avantage de type multiplie les dégâts, tandis que le poison, la paralysie, la confusion et les brûlures peuvent renverser le combat. Utilisez baies et élixirs, changez de monstre au bon moment.',
    },
    pvp: {
      title: 'Duels JcJ',
      short: 'Défiez de vrais joueurs en duel.',
      long: 'Ouvrez l’arène PvP et testez votre équipe contre d’autres dresseurs : défiez un ami grâce à son identifiant de compte ou affrontez un joueur au hasard.',
    },
    quests: {
      title: 'Quêtes et arènes',
      short: 'Aidez les habitants, explorez les villes et rencontrez les champions des stades.',
      long: 'Votre mère, vos voisins et les habitants ont des tâches pour vous, et chaque ville possède son stade où un champion attend ses challengers.',
    },
    style: {
      title: 'Votre style',
      short: 'Habillez votre personnage avec des dizaines de tenues.',
      long: 'Coiffures, chapeaux, lunettes, hauts, pantalons, gants, chaussures, sacs — combinez les tenues sur neuf emplacements. Certains articles sont en boutique, d’autres ne s’obtiennent qu’en récompense.',
    },
  },
  game: { title: 'Le jeu', intro: 'Evolor est un RPG mobile où l’on capture, entraîne et fait évoluer des monstres. Voici ce qui vous attend.' },
  about: {
    title: 'À propos de Tagumplay',
    lead: 'Nous sommes Tagumplay, un studio de jeux indépendant qui crée Evolor.',
    body: [
      'Nous aimons les jeux où chaque créature a sa personnalité et chaque combat est une petite histoire. Evolor est notre vision du RPG de collection de monstres classique : un monde vivant, une progression honnête et une communauté de joueurs qui combattent ensemble.',
      'Nous développons le jeu au plus près des joueurs — beaucoup de fonctionnalités sont nées d’idées sur notre Discord. De nouvelles régions, de nouveaux monstres et événements arrivent.',
    ],
    contactTitle: 'Nous contacter',
    contactText: 'Questions, partenariats ou presse — écrivez-nous :',
  },
  blog: {
    title: 'Actualités',
    intro: 'Mises à jour, événements et notes de développement.',
    readMore: 'Lire la suite',
    back: 'Toutes les actualités',
    notTranslated: 'Cet article n’est pas encore disponible dans votre langue.',
    empty: 'Aucun article pour l’instant.',
  },
  legal: {
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    deleteAccount: 'Supprimer le compte',
    englishOnly: 'Ce document est disponible uniquement en anglais.',
    updated: 'Mis à jour le',
  },
  del: {
    title: 'Supprimer votre compte',
    intro: 'Vous pouvez demander à tout moment la suppression de votre compte Evolor et de toutes les données de jeu associées.',
    steps: [
      'Ouvrez le jeu et copiez votre identifiant joueur depuis l’écran de profil.',
      'Envoyez un e-mail au support depuis l’adresse liée à votre compte (le cas échéant), avec l’objet « Suppression de compte » et votre identifiant joueur.',
      'Nous confirmerons la demande et supprimerons votre compte sous 30 jours.',
    ],
    dataTitle: 'Ce qui est supprimé',
    dataText: 'Votre profil, vos monstres, objets, progression, classements et historique d’achats dans le jeu. Les données de paiement peuvent être conservées par Google selon ses propres règles. La suppression est irréversible.',
    emailSubject: 'Suppression de compte',
    button: 'Écrire au support',
  },
  footer: { rights: 'Tous droits réservés.' },
};

const de: Dict = {
  meta: { description: 'Evolor — ein Monster-Sammel-RPG. Fange, entwickle und kämpfe mit Monstern und fordere echte Spieler heraus.' },
  nav: { home: 'Start', game: 'Das Spiel', blog: 'News', about: 'Studio', language: 'Sprache' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Discord beitreten', getOn: 'Jetzt bei', downloadOn: 'Laden im' },
  hero: {
    tagline: 'Monster-Sammel-RPG',
    title: 'Fangen. Entwickeln. Kämpfen.',
    subtitle: 'Erkunde eine Welt voller wilder Monster, stelle dein Team zusammen und beweise deine Stärke gegen Trainer und echte Spieler.',
  },
  home: {
    featuresTitle: 'Was dich erwartet',
    screenshotsTitle: 'Screenshots',
    monstersTitle: 'Lerne die Monster kennen',
    monstersText: 'In der Welt von Evolor leben Dutzende Monster – jedes mit eigenem Typ, Charakter und eigenen Entwicklungen.',
    communityTitle: 'Werde Teil der Community',
    communityText: 'Finde Gegner, teile Tipps und erfahre Neuigkeiten als Erster auf unserem Discord.',
    latestNews: 'Neueste News',
    allNews: 'Alle News',
  },
  features: {
    catch: {
      title: 'Monster fangen',
      short: 'Erkunde Orte und fange wilde Monster für dein Team.',
      long: 'Reise vom friedlichen Wandertal bis in die unheimliche Geisterstadt. Jeder Ort hat eigene wilde Monster, manche davon selten. Schwäche sie im Kampf, wirf einen Ball und füge sie deiner Sammlung hinzu.',
    },
    evolve: {
      title: 'Entwicklung',
      short: 'Monster wachsen im Kampf und entwickeln sich zu stärkeren Formen.',
      long: 'Jeder Sieg bringt Erfahrung. Mit jedem Level steigen die Werte, Monster lernen neue Attacken und entwickeln sich auf bestimmten Stufen zu einer neuen, mächtigeren Form.',
    },
    battle: {
      title: 'Rundenbasierte Kämpfe',
      short: 'Typen, Statuseffekte und Taktik entscheiden jeden Kampf.',
      long: 'Wähle deine Attacken klug: Typvorteile vervielfachen den Schaden, Gift, Paralyse, Verwirrung und Verbrennung können den Kampf drehen. Nutze Beeren und Elixiere und wechsle Monster im richtigen Moment.',
    },
    pvp: {
      title: 'PvP-Duelle',
      short: 'Fordere echte Spieler zum Duell heraus.',
      long: 'Öffne die PvP-Arena und teste dein Team gegen andere Trainer: Fordere einen Freund über seine Konto-ID heraus oder tritt gegen einen zufälligen Spieler an.',
    },
    quests: {
      title: 'Quests und Arenen',
      short: 'Hilf den Einwohnern, erkunde Städte und triff die Stadionleiter.',
      long: 'Deine Mutter, Nachbarn und Stadtbewohner haben Aufgaben für dich, und jede Stadt hat ihr eigenes Stadion, in dem ein Leiter auf Herausforderer wartet.',
    },
    style: {
      title: 'Dein Stil',
      short: 'Kleide deinen Charakter mit Dutzenden Outfits ein.',
      long: 'Frisuren, Kopfbedeckungen, Brillen, Oberteile, Hosen, Handschuhe, Schuhe, Taschen — kombiniere Kleidung in neun Slots. Manches gibt es im Shop, anderes nur als Belohnung.',
    },
  },
  game: { title: 'Über das Spiel', intro: 'Evolor ist ein Mobile-RPG übers Fangen, Trainieren und Entwickeln von Monstern. Das erwartet dich im Spiel.' },
  about: {
    title: 'Über Tagumplay',
    lead: 'Wir sind Tagumplay, ein unabhängiges Spielestudio, das Evolor entwickelt.',
    body: [
      'Wir lieben Spiele, in denen jede Kreatur ihren eigenen Charakter hat und jeder Kampf eine kleine Geschichte ist. Evolor ist unsere Version des klassischen Monster-Sammel-RPGs: eine lebendige Welt, ehrlicher Fortschritt und eine Community, die gemeinsam kämpft.',
      'Wir entwickeln das Spiel im engen Austausch mit den Spielern — viele Features begannen als Ideen auf unserem Discord. Neue Regionen, Monster und Events sind unterwegs.',
    ],
    contactTitle: 'Kontakt',
    contactText: 'Fragen, Partnerschaften oder Presseanfragen — schreib uns:',
  },
  blog: {
    title: 'News',
    intro: 'Updates, Events und Entwicklungsnotizen.',
    readMore: 'Weiterlesen',
    back: 'Alle News',
    notTranslated: 'Dieser Beitrag ist in deiner Sprache noch nicht verfügbar.',
    empty: 'Noch keine Beiträge.',
  },
  legal: {
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    deleteAccount: 'Konto löschen',
    englishOnly: 'Dieses Dokument ist nur auf Englisch verfügbar.',
    updated: 'Zuletzt aktualisiert',
  },
  del: {
    title: 'Konto löschen',
    intro: 'Du kannst jederzeit die Löschung deines Evolor-Kontos und aller zugehörigen Spieldaten beantragen.',
    steps: [
      'Öffne das Spiel und kopiere deine Spieler-ID im Profil.',
      'Sende eine E-Mail an den Support von der mit deinem Konto verknüpften Adresse (falls vorhanden), mit dem Betreff „Kontolöschung“ und deiner Spieler-ID.',
      'Wir bestätigen die Anfrage und löschen dein Konto innerhalb von 30 Tagen.',
    ],
    dataTitle: 'Was gelöscht wird',
    dataText: 'Dein Profil, deine Monster, Gegenstände, dein Fortschritt, deine Wertungen und die Kaufhistorie im Spiel. Zahlungsdaten können von Google gemäß dessen eigenen Richtlinien aufbewahrt werden. Die Löschung ist endgültig.',
    emailSubject: 'Kontolöschung',
    button: 'Support kontaktieren',
  },
  footer: { rights: 'Alle Rechte vorbehalten.' },
};

const pt: Dict = {
  meta: { description: 'Evolor — um RPG de colecionar monstros. Capture, evolua e batalhe com monstros e desafie jogadores reais.' },
  nav: { home: 'Início', game: 'O jogo', blog: 'Notícias', about: 'Estúdio', language: 'Idioma' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Entrar no Discord', getOn: 'Disponível no', downloadOn: 'Baixar na' },
  hero: {
    tagline: 'RPG de colecionar monstros',
    title: 'Capture. Evolua. Batalhe.',
    subtitle: 'Explore um mundo cheio de monstros selvagens, monte sua equipe e prove sua força contra treinadores e jogadores reais.',
  },
  home: {
    featuresTitle: 'O que te espera',
    screenshotsTitle: 'Capturas de tela',
    monstersTitle: 'Conheça os monstros',
    monstersText: 'Dezenas de monstros vivem no mundo de Evolor, cada um com seu tipo, personalidade e evoluções.',
    communityTitle: 'Junte-se à comunidade',
    communityText: 'Encontre adversários, troque dicas e receba as novidades primeiro no nosso Discord.',
    latestNews: 'Últimas notícias',
    allNews: 'Todas as notícias',
  },
  features: {
    catch: {
      title: 'Capture monstros',
      short: 'Explore locais e capture monstros selvagens para sua equipe.',
      long: 'Viaje do tranquilo Vale dos Andarilhos até a sinistra Cidade Fantasma. Cada local tem seus próprios monstros selvagens, alguns raros. Enfraqueça-os em batalha, jogue uma bola e adicione-os à sua coleção.',
    },
    evolve: {
      title: 'Evolução',
      short: 'Monstros crescem nas batalhas e evoluem para formas mais fortes.',
      long: 'Cada vitória traz experiência. Ao subir de nível, os atributos crescem, os monstros aprendem novos ataques e, em níveis-chave, evoluem para uma forma nova e mais poderosa.',
    },
    battle: {
      title: 'Batalhas por turnos',
      short: 'Tipos, efeitos de status e estratégia decidem cada luta.',
      long: 'Escolha bem seus ataques: vantagem de tipo multiplica o dano, enquanto veneno, paralisia, confusão e queimaduras podem virar a batalha. Use frutas e elixires, troque de monstro na hora certa.',
    },
    pvp: {
      title: 'Duelos PvP',
      short: 'Desafie jogadores reais para um duelo.',
      long: 'Abra a Arena PvP e teste sua equipe contra outros treinadores: desafie um amigo pelo ID da conta ou enfrente um jogador aleatório.',
    },
    quests: {
      title: 'Missões e ginásios',
      short: 'Ajude os moradores, explore cidades e conheça os líderes dos estádios.',
      long: 'Sua mãe, os vizinhos e os moradores têm tarefas para você, e cada cidade tem seu próprio estádio, onde um líder espera por desafiantes.',
    },
    style: {
      title: 'Seu estilo',
      short: 'Vista seu personagem com dezenas de roupas.',
      long: 'Cabelos, chapéus, óculos, blusas, calças, luvas, sapatos, bolsas — combine roupas em nove espaços. Alguns itens estão na loja, outros só podem ser ganhos como recompensa.',
    },
  },
  game: { title: 'Sobre o jogo', intro: 'Evolor é um RPG mobile sobre capturar, treinar e evoluir monstros. Veja o que você fará no jogo.' },
  about: {
    title: 'Sobre a Tagumplay',
    lead: 'Somos a Tagumplay, um estúdio de jogos independente que cria Evolor.',
    body: [
      'Adoramos jogos em que cada criatura tem personalidade e cada batalha é uma pequena história. Evolor é a nossa versão do clássico RPG de colecionar monstros: um mundo vivo, progressão honesta e uma comunidade de jogadores que batalham juntos.',
      'Desenvolvemos o jogo perto dos jogadores — muitas funcionalidades nasceram de ideias no nosso Discord. Novas regiões, monstros e eventos estão a caminho.',
    ],
    contactTitle: 'Fale conosco',
    contactText: 'Dúvidas, parcerias ou imprensa — escreva para nós:',
  },
  blog: {
    title: 'Notícias',
    intro: 'Atualizações, eventos e notas de desenvolvimento.',
    readMore: 'Ler mais',
    back: 'Todas as notícias',
    notTranslated: 'Esta publicação ainda não está disponível no seu idioma.',
    empty: 'Ainda não há publicações.',
  },
  legal: {
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    deleteAccount: 'Excluir conta',
    englishOnly: 'Este documento está disponível apenas em inglês.',
    updated: 'Atualizado em',
  },
  del: {
    title: 'Excluir sua conta',
    intro: 'Você pode solicitar a qualquer momento a exclusão da sua conta Evolor e de todos os dados de jogo associados.',
    steps: [
      'Abra o jogo e copie seu ID de jogador na tela de perfil.',
      'Envie um e-mail ao suporte a partir do endereço vinculado à sua conta (se houver), com o assunto "Exclusão de conta" e seu ID de jogador.',
      'Confirmaremos a solicitação e excluiremos sua conta em até 30 dias.',
    ],
    dataTitle: 'O que é excluído',
    dataText: 'Seu perfil, monstros, itens, progresso, rankings e histórico de compras no jogo. Dados de pagamento podem ser mantidos pelo Google conforme suas próprias políticas. A exclusão é irreversível.',
    emailSubject: 'Exclusão de conta',
    button: 'Escrever ao suporte',
  },
  footer: { rights: 'Todos os direitos reservados.' },
};

const es: Dict = {
  meta: { description: 'Evolor — un RPG de coleccionar monstruos. Captura, evoluciona y combate con monstruos y reta a jugadores reales.' },
  nav: { home: 'Inicio', game: 'El juego', blog: 'Noticias', about: 'Estudio', language: 'Idioma' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Únete a Discord', getOn: 'Disponible en', downloadOn: 'Descárgalo en' },
  hero: {
    tagline: 'RPG de coleccionar monstruos',
    title: 'Captura. Evoluciona. Combate.',
    subtitle: 'Explora un mundo lleno de monstruos salvajes, forma tu equipo y demuestra tu fuerza ante entrenadores y jugadores reales.',
  },
  home: {
    featuresTitle: 'Lo que te espera',
    screenshotsTitle: 'Capturas de pantalla',
    monstersTitle: 'Conoce a los monstruos',
    monstersText: 'Decenas de monstruos habitan el mundo de Evolor, cada uno con su tipo, carácter y evoluciones.',
    communityTitle: 'Únete a la comunidad',
    communityText: 'Encuentra rivales, comparte consejos y entérate de las novedades antes que nadie en nuestro Discord.',
    latestNews: 'Últimas noticias',
    allNews: 'Todas las noticias',
  },
  features: {
    catch: {
      title: 'Captura monstruos',
      short: 'Explora lugares y captura monstruos salvajes para tu equipo.',
      long: 'Viaja desde el apacible Valle Errante hasta el inquietante Pueblo Fantasma. Cada lugar tiene sus propios monstruos salvajes, algunos raros. Debilítalos en combate, lanza una bola y añádelos a tu colección.',
    },
    evolve: {
      title: 'Evolución',
      short: 'Los monstruos crecen en combate y evolucionan a formas más fuertes.',
      long: 'Cada victoria da experiencia. Al subir de nivel crecen sus estadísticas, aprenden nuevos ataques y, en niveles clave, evolucionan a una forma nueva y más poderosa.',
    },
    battle: {
      title: 'Combates por turnos',
      short: 'Tipos, efectos de estado y estrategia deciden cada combate.',
      long: 'Elige bien tus ataques: la ventaja de tipo multiplica el daño, y el veneno, la parálisis, la confusión y las quemaduras pueden cambiar el combate. Usa bayas y elixires y cambia de monstruo en el momento justo.',
    },
    pvp: {
      title: 'Duelos JcJ',
      short: 'Reta a jugadores reales a un duelo.',
      long: 'Abre la Arena PvP y pon a prueba tu equipo contra otros entrenadores: reta a un amigo por su ID de cuenta o enfréntate a un jugador aleatorio.',
    },
    quests: {
      title: 'Misiones y estadios',
      short: 'Ayuda a los vecinos, explora ciudades y conoce a los líderes de los estadios.',
      long: 'Tu madre, los vecinos y la gente del pueblo tienen encargos para ti, y cada ciudad tiene su propio estadio donde un líder espera a sus retadores.',
    },
    style: {
      title: 'Tu estilo',
      short: 'Viste a tu personaje con decenas de atuendos.',
      long: 'Peinados, sombreros, gafas, camisetas, pantalones, guantes, zapatos, bolsos: combina ropa en nueve espacios. Algunas prendas están en la tienda y otras solo se consiguen como recompensa.',
    },
  },
  game: { title: 'Sobre el juego', intro: 'Evolor es un RPG móvil de capturar, entrenar y evolucionar monstruos. Esto es lo que harás en el juego.' },
  about: {
    title: 'Sobre Tagumplay',
    lead: 'Somos Tagumplay, un estudio de videojuegos independiente que crea Evolor.',
    body: [
      'Nos encantan los juegos donde cada criatura tiene su carácter y cada combate es una pequeña historia. Evolor es nuestra versión del clásico RPG de coleccionar monstruos: un mundo vivo, una progresión honesta y una comunidad de jugadores que combaten juntos.',
      'Desarrollamos el juego junto a los jugadores: muchas funciones nacieron de ideas en nuestro Discord. Llegan nuevas regiones, monstruos y eventos.',
    ],
    contactTitle: 'Contacto',
    contactText: 'Preguntas, colaboraciones o prensa — escríbenos:',
  },
  blog: {
    title: 'Noticias',
    intro: 'Actualizaciones, eventos y notas de desarrollo.',
    readMore: 'Leer más',
    back: 'Todas las noticias',
    notTranslated: 'Esta publicación aún no está disponible en tu idioma.',
    empty: 'Aún no hay publicaciones.',
  },
  legal: {
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    deleteAccount: 'Eliminar cuenta',
    englishOnly: 'Este documento solo está disponible en inglés.',
    updated: 'Última actualización',
  },
  del: {
    title: 'Eliminar tu cuenta',
    intro: 'Puedes solicitar en cualquier momento la eliminación de tu cuenta de Evolor y de todos los datos de juego asociados.',
    steps: [
      'Abre el juego y copia tu ID de jugador en la pantalla de perfil.',
      'Envía un correo al soporte desde la dirección vinculada a tu cuenta (si la hay), con el asunto «Eliminación de cuenta» y tu ID de jugador.',
      'Confirmaremos la solicitud y eliminaremos tu cuenta en un plazo de 30 días.',
    ],
    dataTitle: 'Qué se elimina',
    dataText: 'Tu perfil, monstruos, objetos, progreso, clasificaciones e historial de compras en el juego. Google puede conservar los datos de pago según sus propias políticas. La eliminación es irreversible.',
    emailSubject: 'Eliminación de cuenta',
    button: 'Escribir al soporte',
  },
  footer: { rights: 'Todos los derechos reservados.' },
};

const uk: Dict = {
  meta: { description: 'Evolor — RPG про колекціонування монстрів. Лови, розвивай і бийся з монстрами, кидай виклик живим гравцям.' },
  nav: { home: 'Головна', game: 'Про гру', blog: 'Новини', about: 'Про компанію', language: 'Мова' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Наш Discord', getOn: 'Доступно в', downloadOn: 'Завантажте в' },
  hero: {
    tagline: 'RPG про колекціонування монстрів',
    title: 'Лови. Еволюціонуй. Бийся.',
    subtitle: 'Досліджуй світ, повний диких монстрів, збери свою команду й доведи силу в боях із тренерами та живими гравцями.',
  },
  home: {
    featuresTitle: 'Що на тебе чекає',
    screenshotsTitle: 'Скриншоти',
    monstersTitle: 'Знайомся з монстрами',
    monstersText: 'У світі Evolor живуть десятки монстрів — у кожного свій тип, характер і еволюції.',
    communityTitle: 'Приєднуйся до спільноти',
    communityText: 'Шукай суперників, ділися порадами й дізнавайся новини першим у нашому Discord.',
    latestNews: 'Останні новини',
    allNews: 'Усі новини',
  },
  features: {
    catch: {
      title: 'Лови монстрів',
      short: 'Досліджуй локації та лови диких монстрів у свою команду.',
      long: 'Подорожуй від мирної Долини мандрівників до моторошного Міста привидів. У кожній локації свої дикі монстри, є й рідкісні. Ослаб монстра в бою, кинь кулю — і він у твоїй колекції.',
    },
    evolve: {
      title: 'Еволюція',
      short: 'Монстри ростуть у боях і еволюціонують у сильніші форми.',
      long: 'Кожна перемога приносить досвід. З рівнем зростають характеристики, монстри вчать нові атаки, а на ключових рівнях еволюціонують у нову, потужнішу форму.',
    },
    battle: {
      title: 'Покрокові бої',
      short: 'Типи, статусні ефекти й тактика вирішують результат бою.',
      long: 'Обирай атаки з розумом: перевага типу множить шкоду, а отрута, параліч, замішання й опік можуть переламати бій. Використовуй ягоди й еліксири, змінюй монстрів у потрібний момент.',
    },
    pvp: {
      title: 'PvP-дуелі',
      short: 'Викликай живих гравців на дуель.',
      long: 'Відкрий PvP-арену й перевір свою команду проти інших тренерів: виклич друга за ID акаунта або зійдися з випадковим гравцем.',
    },
    quests: {
      title: 'Квести та стадіони',
      short: 'Допомагай мешканцям, досліджуй міста й знайомся з лідерами стадіонів.',
      long: 'У мами, сусідів і містян знайдуться для тебе доручення, а в кожному місті є свій стадіон, де лідер чекає на претендентів.',
    },
    style: {
      title: 'Твій стиль',
      short: 'Вдягай персонажа в десятки вбрань.',
      long: 'Зачіски, головні убори, окуляри, верх, штани, рукавички, взуття, сумки — комбінуй одяг у дев’яти слотах. Щось продається в магазині, а щось можна отримати лише в нагороду.',
    },
  },
  game: { title: 'Про гру', intro: 'Evolor — мобільна RPG про ловлю, прокачування й еволюцію монстрів. Ось чим ти займатимешся у грі.' },
  about: {
    title: 'Про Tagumplay',
    lead: 'Ми — Tagumplay, незалежна ігрова студія, яка створює Evolor.',
    body: [
      'Ми любимо ігри, де кожна істота має свій характер, а кожен бій — маленька історія. Evolor — наш погляд на класичну RPG про монстрів: живий світ, чесна прогресія та спільнота гравців, які б’ються разом.',
      'Ми розвиваємо гру разом із гравцями — чимало функцій з’явилося з ідей у нашому Discord. Попереду нові регіони, монстри й події.',
    ],
    contactTitle: 'Зв’язатися з нами',
    contactText: 'Питання, партнерство чи запити преси — пишіть нам:',
  },
  blog: {
    title: 'Новини',
    intro: 'Оновлення, події та нотатки про розробку.',
    readMore: 'Читати',
    back: 'Усі новини',
    notTranslated: 'Цей запис поки недоступний вашою мовою.',
    empty: 'Поки немає записів.',
  },
  legal: {
    privacy: 'Політика конфіденційності',
    terms: 'Умови використання',
    deleteAccount: 'Видалення акаунта',
    englishOnly: 'Цей документ доступний лише англійською мовою.',
    updated: 'Оновлено',
  },
  del: {
    title: 'Видалення акаунта',
    intro: 'Ви можете будь-коли запросити видалення акаунта Evolor і всіх пов’язаних ігрових даних.',
    steps: [
      'Відкрийте гру й скопіюйте ID гравця на екрані профілю.',
      'Надішліть лист у підтримку з адреси, прив’язаної до акаунта (якщо є), з темою «Видалення акаунта» та вашим ID гравця.',
      'Ми підтвердимо запит і видалимо акаунт протягом 30 днів.',
    ],
    dataTitle: 'Що видаляється',
    dataText: 'Профіль, монстри, предмети, прогрес, рейтинги та історія покупок у грі. Платіжні дані можуть зберігатися Google згідно з його власними правилами. Видалення незворотне.',
    emailSubject: 'Видалення акаунта',
    button: 'Написати в підтримку',
  },
  footer: { rights: 'Усі права захищено.' },
};

const hi: Dict = {
  meta: { description: 'Evolor — मॉन्स्टर इकट्ठा करने वाला RPG। मॉन्स्टर पकड़ें, उन्हें विकसित करें और लड़ें, और असली खिलाड़ियों को चुनौती दें।' },
  nav: { home: 'होम', game: 'गेम', blog: 'समाचार', about: 'कंपनी', language: 'भाषा' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Discord से जुड़ें', getOn: 'उपलब्ध है', downloadOn: 'डाउनलोड करें' },
  hero: {
    tagline: 'मॉन्स्टर इकट्ठा करने वाला RPG',
    title: 'पकड़ो। विकसित करो। लड़ो।',
    subtitle: 'जंगली मॉन्स्टरों से भरी दुनिया की खोज करें, अपनी टीम बनाएं और ट्रेनरों व असली खिलाड़ियों के ख़िलाफ़ अपनी ताक़त साबित करें।',
  },
  home: {
    featuresTitle: 'आपका इंतज़ार कर रहा है',
    screenshotsTitle: 'स्क्रीनशॉट',
    monstersTitle: 'मॉन्स्टरों से मिलें',
    monstersText: 'Evolor की दुनिया में दर्जनों मॉन्स्टर रहते हैं — हर एक का अपना प्रकार, स्वभाव और विकास।',
    communityTitle: 'समुदाय से जुड़ें',
    communityText: 'हमारे Discord पर प्रतिद्वंद्वी खोजें, टिप्स साझा करें और सबसे पहले ख़बरें पाएं।',
    latestNews: 'ताज़ा समाचार',
    allNews: 'सभी समाचार',
  },
  features: {
    catch: {
      title: 'मॉन्स्टर पकड़ें',
      short: 'जगहों की खोज करें और अपनी टीम के लिए जंगली मॉन्स्टर पकड़ें।',
      long: 'शांत वांडर वैली से लेकर डरावने घोस्ट टाउन तक यात्रा करें। हर जगह के अपने जंगली मॉन्स्टर हैं, कुछ दुर्लभ भी। लड़ाई में उन्हें कमज़ोर करें, बॉल फेंकें और उन्हें अपने संग्रह में जोड़ें।',
    },
    evolve: {
      title: 'विकास',
      short: 'मॉन्स्टर लड़ाई में बढ़ते हैं और ज़्यादा ताक़तवर रूपों में विकसित होते हैं।',
      long: 'हर जीत अनुभव देती है। लेवल बढ़ने पर उनकी क्षमताएं बढ़ती हैं, वे नए हमले सीखते हैं और ख़ास लेवल पर एक नए, ज़्यादा शक्तिशाली रूप में विकसित होते हैं।',
    },
    battle: {
      title: 'बारी-आधारित लड़ाइयां',
      short: 'टाइप, स्टेटस इफ़ेक्ट और रणनीति हर लड़ाई तय करते हैं।',
      long: 'हमले सोच-समझकर चुनें: टाइप का फ़ायदा नुक़सान को कई गुना बढ़ा देता है, जबकि ज़हर, लकवा, भ्रम और जलन लड़ाई का रुख़ बदल सकते हैं। बेरी और एलिक्सिर इस्तेमाल करें, सही समय पर मॉन्स्टर बदलें।',
    },
    pvp: {
      title: 'PvP द्वंद्व',
      short: 'असली खिलाड़ियों को द्वंद्व की चुनौती दें।',
      long: 'PvP एरीना खोलें और अपनी टीम को दूसरे ट्रेनरों के ख़िलाफ़ आज़माएं: किसी दोस्त को उसकी अकाउंट ID से चुनौती दें या किसी रैंडम खिलाड़ी से भिड़ें।',
    },
    quests: {
      title: 'क्वेस्ट और स्टेडियम',
      short: 'निवासियों की मदद करें, शहर घूमें और स्टेडियम लीडरों से मिलें।',
      long: 'माँ, पड़ोसियों और शहरवालों के पास आपके लिए काम हैं, और हर शहर का अपना स्टेडियम है जहाँ एक लीडर चुनौती देने वालों का इंतज़ार करता है।',
    },
    style: {
      title: 'आपका स्टाइल',
      short: 'अपने किरदार को दर्जनों पोशाकों में सजाएं।',
      long: 'बाल, टोपी, चश्मा, टॉप, पैंट, दस्ताने, जूते, बैग — नौ स्लॉट में कपड़े मिलाएं। कुछ चीज़ें दुकान में मिलती हैं, कुछ सिर्फ़ इनाम में।',
    },
  },
  game: { title: 'गेम के बारे में', intro: 'Evolor मॉन्स्टर पकड़ने, उन्हें प्रशिक्षित करने और विकसित करने के बारे में एक मोबाइल RPG है। गेम में आप यह सब करेंगे।' },
  about: {
    title: 'Tagumplay के बारे में',
    lead: 'हम Tagumplay हैं, एक स्वतंत्र गेम स्टूडियो जो Evolor बनाता है।',
    body: [
      'हमें ऐसे गेम पसंद हैं जिनमें हर जीव का अपना स्वभाव हो और हर लड़ाई एक छोटी कहानी हो। Evolor क्लासिक मॉन्स्टर-संग्रह RPG पर हमारा नज़रिया है: एक जीवंत दुनिया, ईमानदार प्रगति और खिलाड़ियों का समुदाय जो साथ मिलकर लड़ता है।',
      'हम खिलाड़ियों के साथ मिलकर गेम विकसित करते हैं — कई फ़ीचर हमारे Discord के विचारों से शुरू हुए। नए क्षेत्र, मॉन्स्टर और इवेंट आने वाले हैं।',
    ],
    contactTitle: 'संपर्क करें',
    contactText: 'सवाल, साझेदारी या प्रेस से जुड़े अनुरोध — हमें लिखें:',
  },
  blog: {
    title: 'समाचार',
    intro: 'अपडेट, इवेंट और डेवलपमेंट नोट्स।',
    readMore: 'और पढ़ें',
    back: 'सभी समाचार',
    notTranslated: 'यह पोस्ट अभी आपकी भाषा में उपलब्ध नहीं है।',
    empty: 'अभी कोई पोस्ट नहीं है।',
  },
  legal: {
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें',
    deleteAccount: 'खाता हटाएं',
    englishOnly: 'यह दस्तावेज़ केवल अंग्रेज़ी में उपलब्ध है।',
    updated: 'अंतिम अपडेट',
  },
  del: {
    title: 'अपना खाता हटाएं',
    intro: 'आप किसी भी समय अपने Evolor खाते और उससे जुड़े सभी गेम डेटा को हटाने का अनुरोध कर सकते हैं।',
    steps: [
      'गेम खोलें और प्रोफ़ाइल स्क्रीन से अपनी प्लेयर ID कॉपी करें।',
      'अपने खाते से जुड़े ईमेल पते से (यदि कोई हो) सपोर्ट को "Account deletion" विषय और अपनी प्लेयर ID के साथ ईमेल भेजें।',
      'हम अनुरोध की पुष्टि करेंगे और 30 दिनों के भीतर आपका खाता हटा देंगे।',
    ],
    dataTitle: 'क्या हटाया जाता है',
    dataText: 'गेम में आपकी प्रोफ़ाइल, मॉन्स्टर, आइटम, प्रगति, रेटिंग और ख़रीदारी का इतिहास। भुगतान रिकॉर्ड Google अपनी नीतियों के अनुसार रख सकता है। हटाना वापस नहीं लिया जा सकता।',
    emailSubject: 'Account deletion',
    button: 'सपोर्ट को ईमेल करें',
  },
  footer: { rights: 'सर्वाधिकार सुरक्षित।' },
};

const id: Dict = {
  meta: { description: 'Evolor — RPG koleksi monster. Tangkap, evolusikan, dan bertarung dengan monster, serta tantang pemain sungguhan.' },
  nav: { home: 'Beranda', game: 'Game', blog: 'Berita', about: 'Perusahaan', language: 'Bahasa' },
  cta: { googlePlay: 'Google Play', appStore: 'App Store', discord: 'Gabung Discord', getOn: 'Dapatkan di', downloadOn: 'Unduh di' },
  hero: {
    tagline: 'RPG koleksi monster',
    title: 'Tangkap. Evolusi. Bertarung.',
    subtitle: 'Jelajahi dunia penuh monster liar, bangun timmu, dan buktikan kekuatanmu melawan pelatih dan pemain sungguhan.',
  },
  home: {
    featuresTitle: 'Yang menantimu',
    screenshotsTitle: 'Tangkapan layar',
    monstersTitle: 'Kenali para monster',
    monstersText: 'Puluhan monster hidup di dunia Evolor, masing-masing dengan tipe, karakter, dan evolusinya sendiri.',
    communityTitle: 'Gabung komunitas',
    communityText: 'Cari lawan, berbagi tips, dan dapatkan berita lebih dulu di Discord kami.',
    latestNews: 'Berita terbaru',
    allNews: 'Semua berita',
  },
  features: {
    catch: {
      title: 'Tangkap monster',
      short: 'Jelajahi lokasi dan tangkap monster liar untuk timmu.',
      long: 'Berpetualang dari Lembah Pengembara yang damai hingga Kota Hantu yang menyeramkan. Setiap lokasi punya monster liarnya sendiri, beberapa di antaranya langka. Lemahkan mereka dalam pertarungan, lempar bola, dan tambahkan ke koleksimu.',
    },
    evolve: {
      title: 'Evolusi',
      short: 'Monster tumbuh dalam pertarungan dan berevolusi menjadi bentuk yang lebih kuat.',
      long: 'Setiap kemenangan memberi pengalaman. Saat naik level, statistik meningkat, monster mempelajari serangan baru, dan pada level tertentu berevolusi menjadi bentuk baru yang lebih kuat.',
    },
    battle: {
      title: 'Pertarungan bergiliran',
      short: 'Tipe, efek status, dan strategi menentukan setiap pertarungan.',
      long: 'Pilih serangan dengan bijak: keunggulan tipe melipatgandakan kerusakan, sementara racun, kelumpuhan, kebingungan, dan luka bakar bisa membalikkan keadaan. Gunakan beri dan eliksir, ganti monster di saat yang tepat.',
    },
    pvp: {
      title: 'Duel PvP',
      short: 'Tantang pemain sungguhan untuk berduel.',
      long: 'Buka Arena PvP dan uji timmu melawan pelatih lain: tantang teman lewat ID akunnya atau lawan pemain acak.',
    },
    quests: {
      title: 'Misi & stadion',
      short: 'Bantu warga, jelajahi kota, dan temui para pemimpin stadion.',
      long: 'Ibumu, tetangga, dan warga kota punya tugas untukmu, dan setiap kota punya stadionnya sendiri tempat seorang pemimpin menunggu penantang.',
    },
    style: {
      title: 'Gayamu',
      short: 'Dandani karaktermu dengan puluhan pakaian.',
      long: 'Rambut, penutup kepala, kacamata, atasan, celana, sarung tangan, sepatu, tas — padukan pakaian di sembilan slot. Sebagian item dijual di toko, sebagian lagi hanya bisa didapat sebagai hadiah.',
    },
  },
  game: { title: 'Tentang game', intro: 'Evolor adalah RPG mobile tentang menangkap, melatih, dan mengevolusikan monster. Inilah yang akan kamu lakukan di dalam game.' },
  about: {
    title: 'Tentang Tagumplay',
    lead: 'Kami Tagumplay, studio game independen yang membuat Evolor.',
    body: [
      'Kami menyukai game di mana setiap makhluk punya karakter sendiri dan setiap pertarungan adalah cerita kecil. Evolor adalah versi kami dari RPG koleksi monster klasik: dunia yang hidup, progres yang jujur, dan komunitas pemain yang bertarung bersama.',
      'Kami mengembangkan game bersama para pemain — banyak fitur berawal dari ide di Discord kami. Wilayah, monster, dan event baru sedang dalam perjalanan.',
    ],
    contactTitle: 'Hubungi kami',
    contactText: 'Pertanyaan, kerja sama, atau media — tulis kepada kami:',
  },
  blog: {
    title: 'Berita',
    intro: 'Pembaruan, event, dan catatan pengembangan.',
    readMore: 'Baca selengkapnya',
    back: 'Semua berita',
    notTranslated: 'Postingan ini belum tersedia dalam bahasamu.',
    empty: 'Belum ada postingan.',
  },
  legal: {
    privacy: 'Kebijakan Privasi',
    terms: 'Ketentuan Layanan',
    deleteAccount: 'Hapus akun',
    englishOnly: 'Dokumen ini hanya tersedia dalam bahasa Inggris.',
    updated: 'Terakhir diperbarui',
  },
  del: {
    title: 'Hapus akunmu',
    intro: 'Kamu dapat meminta penghapusan akun Evolor beserta semua data game terkait kapan saja.',
    steps: [
      'Buka game dan salin ID pemainmu dari layar profil.',
      'Kirim email ke dukungan dari alamat yang terhubung dengan akunmu (jika ada), dengan subjek "Penghapusan akun" dan ID pemainmu.',
      'Kami akan mengonfirmasi permintaan dan menghapus akunmu dalam 30 hari.',
    ],
    dataTitle: 'Apa yang dihapus',
    dataText: 'Profil, monster, item, progres, peringkat, dan riwayat pembelian di dalam game. Data pembayaran dapat disimpan oleh Google sesuai kebijakannya. Penghapusan tidak dapat dibatalkan.',
    emailSubject: 'Penghapusan akun',
    button: 'Email dukungan',
  },
  footer: { rights: 'Hak cipta dilindungi.' },
};

export const ui: Record<Lang, Dict> = { en, ru, fr, de, pt, es, uk, hi, id };
