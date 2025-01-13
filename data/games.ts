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
    id: 'bubbleShooter',
    title: 'Bubble Shooter HD 3',
    description: 'Bubble Shooter HD 3 is the long-awaited third sequel to the the legendary Bubble Shooter game. Bubble Shooter HD 3 features the classic Bubble Shooter HD gameplay with a set of fresh new bubbles, the option to choose between the arrow vs pointer when shooting bubbles as well as the mighty BOMB feature that lets you blow up 15 bubbles at once. So what is the highest score you can achieve? Enjoy Bubble Shooter HD 3 now and break a new record!',
    thumbnail: '/games/bubbleShooter.jpg',
    url: 'https://html5.gamedistribution.com/03e358cc3331480795d74a55e4283686/?gd_sdk_referrer_url=https://www.spatial.io/g/bubble-shooter-hd-3',
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
  {
    id: 'worldWar2',
    title: 'World War 2',
    description: 'Immerse yourself in the atmosphere of World War II, where every battle is a unique fight for survival! The game is designed for military enthusiasts and those who love intense online battles. It’s the perfect choice for players who prefer shooters with detailed gameplay, a variety of characters, and customization. Suitable for both seasoned fighters and newcomers. Enjoy playing this third person shooter in this war simulation game here at Y8.com!',
    thumbnail: '/games/ww2.jpg',
    url: 'https://play.wgplayground.com/ifr/2e8935eb95926955842ef1a1e866e4e4?key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'stopTheZombies',
    title: 'Stop the Zombies',
    description: 'Stop the Zombies is a challenging zombie defense game. Can you survive waves of incoming zombies? Merge flowers to upgrade your defense. Upgraded flowers become more powerful and can defeat the bosses! Manage your strategy to defeat waves of enemies.',
    thumbnail: '/games/zombie.jpg',
    url: 'https://html5.gamedistribution.com/e6c2e2c2bfd9480598c623ffde6f1e27/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fgtr_drift&key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'lolOMG',
    title: 'LOL OMG Doll',
    description: 'Have you ever explored the vibrant world of LOL OMG dolls? These stylish figures take the charm of the popular LOL Surprise dolls to the next level, offering a larger canvas for creativity and an even broader array of accessories to mix and match. Now, you can dive into a delightful dress-up game inspired by these dolls, where the possibilities for customization are as endless as your imagination.',
    thumbnail: '/games/lol.jpg',
    url: 'https://html5.gamedistribution.com/e6c2e2c2bfd9480598c623ffde6f1e27/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fgtr_drift&key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'postureDuel',
    title: 'Posture Duel',
    description: 'Posture Duel is a mind game where you must carefully position your hero s posture to successfully battle opponents. Choose from a variety of weapons, including swords, shields, maces, clubs, or even a chainsaw, and engage in intense duels. Adjust your stance to gain the upper hand in combat, as each weapon requires different positioning to maximize its effectiveness. Outsmart your enemy and become the ultimate warrior by mastering the art of posture and weapon selection!',
    thumbnail: '/games/postureDuel.jpg',
    url: 'https://html5.gamedistribution.com/e6c2e2c2bfd9480598c623ffde6f1e27/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fgtr_drift&key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'dreamPetLink',
    title: 'Dream Pet Link',
    description: 'Connect identical tiles to each other to clear the board. Click 2 identical tiles to connect them. Each connection can have no more than 2 turns.',
    thumbnail: '/games/dreamPetLink.jpg',
    url: 'https://html5.gamedistribution.com/f9de399f8d324adc828279e73f43951c/?gd_sdk_referrer_url=https%3A%2F%2Fwww.1001games.com%2Fthink%2Fdream-pet-link',
    category: ['music', 'creative'],
    featured: true,
  },
  // 添加更多游戏...
]; 