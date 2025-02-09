export interface Game {
  id: string;
  title: string;
  metaTitle?: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string[];
  tags?: string[];
  featured?: boolean;
  originalUrl?: string;
  supportMobile?: boolean;
}

export const games: Game[] = [
  {
    id: 'dinosaur-game',
    metaTitle: 'Chrome Dino Run | dinosaur game | dino game',
    title: 'Chrome Dino Run',
    description: 'A 8-bit game comes for the people who love old-school styled graphics, with a dinosaur at an infinite desert. Your goal is to avoid cacti. Each time you jump over a cactus, you get one point. Claim that you are the best at this game and show your skills to your friends by scoring the highest! Let the Chrome Dino run begin!',
    thumbnail: '/games/dino-run.jpg',
    url: 'https://html5.gamemonetize.games/gnmwziqsa5syjkym15fw581l40dsqq67/',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'sprunki-match',
    metaTitle: 'Sprunki Match | Sprunki | Match',
    title: 'Sprunki Match',
    description: 'Enjoy the vibrant world of Sprunki Match, a delightful tile-matching game for kids and families! Match colorful tiles to clear levels, unlock power-ups, and achieve high scores. Perfect for improving focus and strategy, this game offers hours of fun for players of all ages. Dive into this exciting adventure and help Sprunki conquer each puzzle-filled challenge!',
    thumbnail: '/games/sprunki-match.jpg',
    url: 'https://html5.gamemonetize.co/haw83ogwh8tmttia1afcromw1seh12ln/',
    supportMobile: true,
    category: ['Sprunki'],
    featured: true,
  },
  {
    id: 'brick-breaker',
    metaTitle: 'Brick Breaker | Brick Breaker Classic | Brick Breaker Mania | Smash Bricks Game | Brick Breaker Master',
    title: 'Brick Breaker',
    description: 'Smash bricks, defy gravity & unleash chaos in this fast-paced arcade thrill! Deflect balls with slick paddle moves, blast power-ups, and conquer hypnotic challenges. Classic retro vibes meet modern upgrades - how long can YOU survive? Play FREE now!',
    thumbnail: '/games/brick-breaker.webp',
    url: 'https://html5.gamemonetize.co/0ku50976fjhllr89hoyh6bpngbrrd5te/',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'super-mario-run',
    title: 'Super Mario Run',
    description: 'Run with Mario and friends and help to rescue the princess, tap the screen to jump and make some tricks movements, Rush all the worlds and stomp the enemies to kill them, collect coins and buy Mario friend mask in the shop, be carefull with the spikes and saws, Run Fasters As possible and Help Mario to reach the best scores, Enjoy in Kiz10',
    thumbnail: '/games/SuperMarioRun.webp',
    url: 'https://html5.gamemonetize.co/pooszvaulpq40v81v8z3cfdpzau4hro6/',
    supportMobile: true,
    category: ['Sports'],
    featured: true,
  },
  {
    id: 'basketball-life-3d',
    title: 'Basketball Life 3D',
    description: 'Ready for the wonderful basketball challenge? Basketball Life 3D is a fun and creative sports game that tests your skills and timing! From classic hoop challenges to trick shots, every level is packed with excitement.',
    thumbnail: '/games/basketball.webp',
    url: 'https://html5.gamemonetize.co/47s9m0brc0yi9uxuiox53uov9hoyy40n/',
    supportMobile: true,
    category: ['Sports'],
    featured: true,
  },
  {
    id: 'sprunki-phase-9',
    title: 'sprunki phase 9 | sprunki fase 9',
    description: 'Sprunki Phase 9 takes the unique blend of rhythm-based gameplay and platforming to a whole new level. This phase brings together the dynamic world of Sprunki with the iconic music creation game, Incredibox. Players will be able to create their own unique tracks while navigating through a series of challenging levels. The game features a wide range of music genres and styles, allowing players to express their creativity and challenge their rhythm skills. With a focus on fun and accessibility, Sprunki Phase 9 offers an engaging and addictive experience for both newcomers and seasoned players.',
    thumbnail: '/games/sprunki9.webp',
    url: 'https://iframegame.com/embed/sprunki-phase-9/index.html',
    supportMobile: true,
    category: ['Sprunki'],
    featured: true,
  },
  {
    id: 'space-war-3d',
    title: 'Space War 3D',
    description: 'If you are a fan of space shooting games and experiencing sky shooting styles, then Space War is right up your alley. One day, our beautiful galaxy is attacked by space invaders. You are the last hero of the galaxy. Your goal will require quite a struggle because you have to save the galaxy from the enemies. Space War puts you in a front-line battle with space invaders. You will take control of the spaceship and protect the galaxy from alien swarms. As the game progresses, the spaceship qualifies for the upgrade and you will get the full lethal feature.',
    thumbnail: '/games/SpaceWar3D.webp',
    url: 'https://html5.gamemonetize.co/2nvgjwud82nthgbyy15nqlzbtlv07g6h/',
    category: ['Adventure'],
    supportMobile: true,
    featured: true,
  },
  {
    id: 'skibidi-toilet-jigsaw-puzzle',
    title: 'Skibidi Toilet Jigsaw Puzzle',
    description: 'Laugh your way through the hilariously wacky world of Skibidi Toilet Jigsaw! Solve puzzles featuring iconic scenes and characters from the viral meme. Perfect for fans of funny puzzles and quirky humor, this game offers adjustable difficulty levels for all ages. Enjoy hours of entertainment and meme-worthy fun with this unique puzzle game!',
    thumbnail: '/games/Skibidi.webp',
    url: 'https://html5.gamemonetize.co/0tve9iq1vlu2vkur6omxin74pkgsdv65/',
    category: ['Casual'],
    supportMobile: true,
    featured: true,
  },
  {
    id: 'bubble-shooter',
    title: 'Bubble Shooter HD 3',
    description: 'Bubble Shooter HD 3 is the long-awaited third sequel to the the legendary Bubble Shooter game. Bubble Shooter HD 3 features the classic Bubble Shooter HD gameplay with a set of fresh new bubbles, the option to choose between the arrow vs pointer when shooting bubbles as well as the mighty BOMB feature that lets you blow up 15 bubbles at once. So what is the highest score you can achieve? Enjoy Bubble Shooter HD 3 now and break a new record!',
    thumbnail: '/games/bubbleShooter.webp',
    url: 'https://html5.gamedistribution.com/03e358cc3331480795d74a55e4283686/?gd_sdk_referrer_url=https://www.spatial.io/g/bubble-shooter-hd-3',
    category: ['Casual'],
    supportMobile: true,
    featured: true,
  },
  {
    id: 'block-legend-puzzle',
    title: 'Block Legend Puzzle',
    description: `Welcome To Play Block Legend Puzzle. "Block Legend Puzzle " is a fun and classic block game! And our Block Puzzle is not just that. It is more Simple and addictive! Once you start, you will not stop playing. Just have a try, you will love it! make full lines vertically or horizontally to clear the blocks and to get a high score. drag and drop blocks in the grid.`,
    thumbnail: '/games/BlockLegendPuzzle.webp',
    url: 'https://html5.gamemonetize.co/m4jm6dce30g8owodh7ezzv8bc1q63neq/',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'dream-pet-link',
    title: 'Dream Pet Link',
    description: 'Connect identical tiles to each other to clear the board. Click 2 identical tiles to connect them. Each connection can have no more than 2 turns.',
    thumbnail: '/games/dreamPetLink.webp',
    url: 'https://html5.gamedistribution.com/f9de399f8d324adc828279e73f43951c/?gd_sdk_referrer_url=https%3A%2F%2Fwww.1001games.com%2Fthink%2Fdream-pet-link',
    category: ['Casual'],
    supportMobile: true,
    featured: true,
  },
  {
    id: 'master-chess',
    title: 'Master Chess',
    description: 'Do you want to develop intelligence by playing chess? This game has two modes, play against the computer and challenge a friend playing locally. Enjoy this stylish version of the classic chess game.',
    thumbnail: '/games/masterChess.webp',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/master_chess_v3',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'world-war-2',
    title: 'World War 2',
    description: 'Immerse yourself in the atmosphere of World War II, where every battle is a unique fight for survival! The game is designed for military enthusiasts and those who love intense online battles. Its the perfect choice for players who prefer shooters with detailed gameplay, a variety of characters, and customization. Suitable for both seasoned fighters and newcomers.',
    thumbnail: '/games/ww2.webp',
    url: 'https://play.wgplayground.com/ifr/2e8935eb95926955842ef1a1e866e4e4',
    category: ['Adventure'],
    supportMobile: false,
    featured: true,
  },
  {
    id: 'city-bike-stunt',
    title: 'City Bike Stunt',
    description: `It's time to show off your skills on motorcycles with the City Bike Stunt game! If you complete 6 different races in time, you can unlock powerful motorcycles. Aim for the ramps and avoid the barriers while you attempt to reach the finish line in each thrilling level. Do not forget to use NITRO power to pass long ramps! Continue with the "2 PLAYER" option to play with your friend. Prove to your friend who is a better motorcycle master!`,
    thumbnail: '/games/CityBikeStunt.webp',
    url: 'https://html5.gamemonetize.co/4fsie8xlboycrf46lxevrj522e1pwmp0/',
    supportMobile: false,
    category: ['Adventure'],
    featured: true,
  },
  {
    id: 'dollz',
    title: 'Return of the Dollz',
    description: `Do you remember dollz? Sometimes called cartoon dolls, the games where you could create them were known as dollmakers. They were all the rage in the early 2000s, but if you ever spent hours dressing them up, it feels like just yesterday! We got Poika to design a fresh take on dollz for this dollmaker. She's definitely leveled up: bigger, more detailed, and way easier to see. The originals were tiny, probably because computer screens were so much smaller back then! The game is packed with Y2K vibes – think low-rise cargo pants, chunky shoes, crop tops, and those skinny scarves everyone seemed to own.`,
    thumbnail: '/games/dollz.webp',
    url: 'https://static.dressupgames.com/leikir/no-hotlinking/dollz/game.html',
    supportMobile: true,
    category: ['Creative'],
    featured: true,
  },
  {
    id: 'uno-online',
    title: 'Uno Online',
    description: 'UUno Online is a strategy card game with two game modes. In the game, the first player to clear his hand will become the winner. In order to win, you need to guess the deck of cards in your opponents hands and arrange your card order reasonably',
    thumbnail: '/games/uno.webp',
    url: 'https://kdata1.com/2017/03/four-colors/',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'quad-bike-racing',
    title: 'Quad Bike Racing',
    description: 'Play Quad bike racing on amazing racing tracks. Do you like quad bike top speed race and motorcycle drift race on fast tracks? If Yes then you have to play with multi selection option Quad Bike Racing with violent and uncontrollable racing manner on impossible racing tracks.',
    thumbnail: '/games/QuadBikeRacing.webp',
    url: 'https://html5.gamemonetize.co/j4ihu5ioob5nay2xiufynfcmmniyx7ih/',
    supportMobile: false,
    category: ['Adventure'],
    featured: true,
  },
  {
    id: 'checkers-deluxe',
    title: 'Checkers Deluxe Edition',
    description: `It's a clash on the battlefield! Draw up your plan and defeat your opponents with finesse! It is also known as the draughts game, and it is an interesting test of strategy. Compete with an opponent and dominate their pieces as best you can. What happens when you manage to move a piece to the other end? Come play now and let's find out!`,
    thumbnail: '/games/checkersDeluxe.webp',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/master_checkers_v3/?key=y8&value=default',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },

  {
    id: 'fnf-wacky-world',
    title: 'FNF: Wacky World',
    description: `FNF: Wacky World is a super mod for Friday Night Funkin' featuring a playable version of SleepyOreo's song "Wacky World" based on The Amazing Digital Circus. Check your reflexes in this awesome rap battle and win this round.`,
    thumbnail: '/games/fnfWackyWorld.webp',
    url: 'https://fnf.kdata1.com/2024/wacky-world/12/',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'spider-solitaire',
    title: 'Spider Solitaire',
    description: `Do you like Solitaire Games? Try and play now the Spider Solitare Big. This Spider Solitaire game is played with large clear cards and comes with the handy hint button. You can choose to play with 1, 2 or 4 suits. Play easy with single suit for easy card matching in either heart or diamond. The 4 suit lets you play with more challenging cards.`,
    thumbnail: '/games/spiderSolitaire.webp',
    url: 'https://games.gameboss.com/spidersolitairebig/index.html',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
  },
  {
    id: 'winter-clash-3d',
    title: 'Winter Clash 3D',
    description: `This Christmas the evil elves plan to take over the Santa secret place, and summon the evil Baba Yaga, also known as Pagan Idol to this world. Don’t let this happen. Take your gun and impose punishment on all who confront you in a brand new overwhelming team shooter Winter Clash 3D. Take a role of a mighty Santa Clause and capture the Pagan Idol from a deserted lighthouse island, and burn it to ashes in your Christmas fire.`,
    thumbnail: '/games/winterClash3D.webp',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/winter_clash_3d/?key=2963721&value=173323',
    category: ['Adventure'],
    supportMobile: true,
    featured: true,
  },
  {
    id: 'cs-dust',
    title: 'CS Dust',
    description: 'CS Dust is a 3D first-person shooter game with two game modes and many different weapons. You can choose a side (police or terrorists) and try to destroy the enemy team to win. Buy new weapons and unlock the legendary AWP to become the new champion.',
    thumbnail: '/games/cs.webp',
    url: 'https://storage.y8.com/y8-studio/unity_webgl/perion1111/cs_dust',
    category: ['Adventure'],
    supportMobile: false,
    featured: true,
  },
  // 添加更多游戏...
]; 