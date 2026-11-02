import type { ImageMetadata } from 'astro';
import type { FeatureKey } from '../i18n/ui';
import catchImg from '../assets/game/catch.png';
import evolveImg from '../assets/game/evolve.png';
import battleImg from '../assets/game/battle-ui.png';
import battlesImg from '../assets/game/battles.png';
import exploreImg from '../assets/game/explore.png';
import worldImg from '../assets/game/world.png';
import forestImg from '../assets/game/forest.png';
import ball from '../assets/items/ball.png';
import fireStone from '../assets/items/fire-stone.png';
import berryFire from '../assets/items/berry-fire.png';
import gems from '../assets/items/gems.png';
import berryQuest from '../assets/items/berry-quest.png';
import backpack from '../assets/items/backpack.png';
import embera from '../assets/monsters/embera.png';

// Скриншоты — со страницы игры в Google Play, иконки — спрайты из сборки игры.
// image — большая картинка фичи; если её нет, на странице «Об игре» показывается icon на градиенте bg.
export const featureStyle: Record<FeatureKey, { icon: ImageMetadata; bg: string; image?: ImageMetadata }> = {
  catch: { icon: ball, bg: 'linear-gradient(135deg, #1e6b5c, #1b3f8a)', image: catchImg },
  evolve: { icon: fireStone, bg: 'linear-gradient(135deg, #5b2a8a, #1b3f8a)', image: evolveImg },
  battle: { icon: berryFire, bg: 'linear-gradient(135deg, #8a2a3f, #4a1f6e)', image: battleImg },
  pvp: { icon: gems, bg: 'linear-gradient(135deg, #8a5a1e, #6e1f3f)', image: battlesImg },
  breed: { icon: embera, bg: 'linear-gradient(135deg, #2a7a4a, #6e6a1f)' },
  quests: { icon: berryQuest, bg: 'linear-gradient(135deg, #3a4a8a, #1f6e6a)', image: exploreImg },
  style: { icon: backpack, bg: 'linear-gradient(135deg, #8a2a6e, #2a3a8a)' },
};

// Скриншоты для галереи на главной.
export const screenshots: ImageMetadata[] = [catchImg, battleImg, exploreImg, evolveImg, worldImg, battlesImg, forestImg];

// Монстры для галереи на главной: имя = имя спрайта в игре.
const monsterFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/monsters/*.png', { eager: true });
const monsterOrder = ['Ignibite', 'Seedly', 'Frostwolf', 'Blazebraze', 'Petalume', 'Tidebreaker', 'Wolpix', 'Noctabat', 'Taranthex', 'SunflowerFairy', 'Scorviper', 'Kingcrab', 'Mistil', 'Umbrawl', 'Lumip', 'Pyroclash'];
export const monsters = monsterOrder.map((name) => ({
  name: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
  image: monsterFiles[`../assets/monsters/${name.toLowerCase()}.png`].default,
}));
