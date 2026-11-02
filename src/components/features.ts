import type { ImageMetadata } from 'astro';
import type { FeatureKey } from '../i18n/ui';
import catchImg from '../assets/screens/catch-3.jpg';
import evolveImg from '../assets/screens/evolve-2.jpg';
import evolveDoneImg from '../assets/screens/evolve-3.jpg';
import battleImg from '../assets/screens/battle-5.jpg';
import attacksImg from '../assets/screens/battle-2.jpg';
import pvpImg from '../assets/screens/pvp-1.jpg';
import questsImg from '../assets/screens/quests-3.jpg';
import gymImg from '../assets/screens/quests-4-clean.jpg';
import styleImg from '../assets/screens/style-3.jpg';
import teamImg from '../assets/screens/team-1.jpg';
import starterImg from '../assets/screens/team-starter-1.jpg';
import key1 from '../assets/screens/key-1.jpg';
import key2 from '../assets/screens/key-2.jpg';
import key3 from '../assets/screens/key-3.jpg';
import townImg from '../assets/screens/world-1.jpg';
import ghostTownImg from '../assets/screens/world-4.jpg';
import valleyImg from '../assets/screens/world-7.jpg';
import ball from '../assets/items/ball.png';
import fireStone from '../assets/items/fire-stone.png';
import berryFire from '../assets/items/berry-fire.png';
import gems from '../assets/items/gems.png';
import berryQuest from '../assets/items/berry-quest.png';
import backpack from '../assets/items/backpack.png';

// Скриншоты — сняты в Unity (Game View 1920×1080), иконки — спрайты из сборки игры.
// image — большая картинка фичи; если её нет, на странице «Об игре» показывается icon на градиенте bg.
export const featureStyle: Record<FeatureKey, { icon: ImageMetadata; bg: string; image?: ImageMetadata }> = {
  catch: { icon: ball, bg: 'linear-gradient(135deg, #1e6b5c, #1b3f8a)', image: catchImg },
  evolve: { icon: fireStone, bg: 'linear-gradient(135deg, #5b2a8a, #1b3f8a)', image: evolveImg },
  battle: { icon: berryFire, bg: 'linear-gradient(135deg, #8a2a3f, #4a1f6e)', image: battleImg },
  pvp: { icon: gems, bg: 'linear-gradient(135deg, #8a5a1e, #6e1f3f)', image: pvpImg },
  quests: { icon: berryQuest, bg: 'linear-gradient(135deg, #3a4a8a, #1f6e6a)', image: questsImg },
  style: { icon: backpack, bg: 'linear-gradient(135deg, #8a2a6e, #2a3a8a)', image: styleImg },
};

// Скриншоты для галереи на главной.
export const screenshots: ImageMetadata[] = [
  key1, battleImg, catchImg, evolveDoneImg, townImg, key2, attacksImg, gymImg,
  teamImg, starterImg, ghostTownImg, key3, valleyImg,
];

// Монстры для галереи на главной (10 штук — два ряда по 5): имя = имя спрайта в игре.
const monsterFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/monsters/*.png', { eager: true });
const monsterOrder = ['Ignibite', 'Seedly', 'Frostwolf', 'Blazebraze', 'Tidebreaker', 'Noctabat', 'Taranthex', 'Scorviper', 'Mistil', 'Lumip'];
export const monsters = monsterOrder.map((name) => ({
  name: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
  image: monsterFiles[`../assets/monsters/${name.toLowerCase()}.png`].default,
}));
