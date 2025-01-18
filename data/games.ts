export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string[];
  featured?: boolean;
}

export const games: Game[] = [
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
    id: 'blockBlast',
    title: 'Block Blast',
    description: 'Block Blast is a fascinating arcade game. Its entertaining and addictive gameplay makes it ideal for both calming the mind and stimulating the brain. In this Tetris-inspired game, arrange the blocks and remove as many as you can. Your brain will be soothed and given some beneficial exercise while working on this problem. ',
    thumbnail: '/games/blockBlast.jpg',
    url: 'https://html5.gamedistribution.com/3a364ed8d075418abb7849e1d63b6015/?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fblock_blast_&key=y8&value=default',
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
  {
    id: 'masterChess',
    title: 'Master Chess',
    description: 'Do you want to develop intelligence by playing chess? This game has two modes, play against the computer and challenge a friend playing locally. Enjoy this stylish version of the classic chess game.',
    thumbnail: '/games/masterChess.jpg',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/master_chess_v3',
    category: ['music', 'creative'],
    featured: true,
  },
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
    id: 'worldWar2',
    title: 'World War 2',
    description: 'Immerse yourself in the atmosphere of World War II, where every battle is a unique fight for survival! The game is designed for military enthusiasts and those who love intense online battles. It’s the perfect choice for players who prefer shooters with detailed gameplay, a variety of characters, and customization. Suitable for both seasoned fighters and newcomers. Enjoy playing this third person shooter in this war simulation game here at Y8.com!',
    thumbnail: '/games/ww2.jpg',
    url: 'https://play.wgplayground.com/ifr/2e8935eb95926955842ef1a1e866e4e4',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'stopTheZombies',
    title: 'Stop the Zombies',
    description: 'Stop the Zombies is a challenging zombie defense game. Can you survive waves of incoming zombies? Merge flowers to upgrade your defense. Upgraded flowers become more powerful and can defeat the bosses! Manage your strategy to defeat waves of enemies.',
    thumbnail: '/games/zombie.jpg',
    url: 'https://storage.y8.com/y8rg/html5/d9dd7cfec9f7/?key=pog&value=default',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'dollz',
    title: 'Return of the Dollz',
    description: `Do you remember dollz? Sometimes called cartoon dolls, the games where you could create them were known as dollmakers. They were all the rage in the early 2000s, but if you ever spent hours dressing them up, it feels like just yesterday! We got Poika to design a fresh take on dollz for this dollmaker. She's definitely leveled up: bigger, more detailed, and way easier to see. The originals were tiny, probably because computer screens were so much smaller back then! The game is packed with Y2K vibes – think low-rise cargo pants, chunky shoes, crop tops, and those skinny scarves everyone seemed to own.`,
    thumbnail: '/games/dollz.jpg',
    url: 'https://static.dressupgames.com/leikir/no-hotlinking/dollz/game.html',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'unoOnline',
    title: 'Uno Online',
    description: 'UUno Online is a strategy card game with two game modes. In the game, the first player to clear his hand will become the winner. In order to win, you need to guess the deck of cards in your opponents hands and arrange your card order reasonably',
    thumbnail: '/games/uno.jpg',
    url: 'https://kdata1.com/2017/03/four-colors/',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'racingGo',
    title: 'Racing Go',
    description: 'Racing Go - Super racing game with amazing graphics and different game modes. You can choose the mode in the game map. Buy new cars and upgrades to become the best racer. Drive best supercars and avoid traffic on the road. ',
    thumbnail: '/games/racingGo.jpg',
    url: 'https://www.gameflare.com/embed/racing-go/',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'checkersDeluxe',
    title: 'Checkers Deluxe Edition',
    description: `It's a clash on the battlefield! Draw up your plan and defeat your opponents with finesse! It is also known as the draughts game, and it is an interesting test of strategy. Compete with an opponent and dominate their pieces as best you can. What happens when you manage to move a piece to the other end? Come play now and let's find out!`,
    thumbnail: '/games/checkersDeluxe.jpg',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/master_checkers_v3/?key=y8&value=default',
    category: ['music', 'creative'],
    featured: true,
  },

  {
    id: 'fnfWackyWorld',
    title: 'FNF: Wacky World',
    description: `FNF: Wacky World is a super mod for Friday Night Funkin' featuring a playable version of SleepyOreo's song "Wacky World" based on The Amazing Digital Circus. Check your reflexes in this awesome rap battle and win this round.`,
    thumbnail: '/games/fnfWackyWorld.jpg',
    url: 'https://fnf.kdata1.com/2024/wacky-world/12/',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'spiderSolitaire',
    title: 'Spider Solitaire',
    description: `Do you like Solitaire Games? Try and play now the Spider Solitare Big. This Spider Solitaire game is played with large clear cards and comes with the handy hint button. You can choose to play with 1, 2 or 4 suits. Play easy with single suit for easy card matching in either heart or diamond. The 4 suit lets you play with more challenging cards.`,
    thumbnail: '/games/spiderSolitaire.jpg',
    url: 'https://games.gameboss.com/spidersolitairebig/index.html',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'winterClash3D',
    title: 'Winter Clash 3D',
    description: `This Christmas the evil elves plan to take over the Santa secret place, and summon the evil Baba Yaga, also known as Pagan Idol to this world. Don’t let this happen. Take your gun and impose punishment on all who confront you in a brand new overwhelming team shooter Winter Clash 3D. Take a role of a mighty Santa Clause and capture the Pagan Idol from a deserted lighthouse island, and burn it to ashes in your Christmas fire.`,
    thumbnail: '/games/winterClash3D.jpg',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/winter_clash_3d/?key=2963721&value=173323',
    category: ['music', 'creative'],
    featured: true,
  },
  {
    id: 'csDust',
    title: 'CS Dust',
    description: 'CS Dust is a 3D first-person shooter game with two game modes and many different weapons. You can choose a side (police or terrorists) and try to destroy the enemy team to win. Buy new weapons and unlock the legendary AWP to become the new champion.',
    thumbnail: '/games/cs.jpg',
    url: 'https://storage.y8.com/y8-studio/unity_webgl/perion1111/cs_dust',
    category: ['music', 'creative'],
    featured: true,
  },
  // 添加更多游戏...
]; 