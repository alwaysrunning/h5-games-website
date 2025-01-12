export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string[];
  featured?: boolean;
}
// https://storage.y8.com/y8-studio/unity_webgl/perion1111/cs_dust/?key=y8&value=default
// https://sprunki.org/sprunki-incredibox.embed
export const games: Game[] = [
  {
    id: 'incredibox',
    title: 'Incredibox',
    description: `Sprunki is an interactive music creation game that provides players with a fun and creative way to mix beats, sounds, and characters to build unique tracks. It places players in a vibrant animated world where the goal is not only to challenge themselves through various music levels but also to express their creativity. The game is unique in its approach to music gaming, merging the excitement of exploration with the joy of music creation, presenting a world filled with challenges and mysteries to be unraveled. As players maneuver through the game's environments, they will encounter different difficulties that test their abilities.`,
    thumbnail: '/games/thumb.jpg',
    url: 'https://sprunki.org/sprunki-incredibox.embed',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'tombRunner',
    title: 'Tomb Runner',
    description: 'Tomb Runner is a game similar to Temple Run if you are already familiar with it. Get with this hero as far as possible and collect points on your route. The farther expires, and the better for you. Do everything in your power to get really far. Be constantly on the alert, because one mistake can cost you the whole game.',
    thumbnail: '/games/tomb.jpg',
    url: 'https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Ftomb_runner&key=y8&ratio_tolerant=true&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'csDust',
    title: 'CS Dust',
    description: 'CS Dust is a 3D first-person shooter game with two game modes and many different weapons. You can choose a side (police or terrorists) and try to destroy the enemy team to win. Buy new weapons and unlock the legendary AWP to become the new champion. Play the CS Dust game at Y8 now.',
    thumbnail: '/games/cs.jpg',
    url: 'https://storage.y8.com/y8-studio/unity_webgl/perion1111/cs_dust/?key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  // 添加更多游戏...
]; 