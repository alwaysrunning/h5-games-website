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
  graphics?: number;
  sound?: number;
  difficulty?: number;
  overall?: number;
  review?: string;
}

export const games: Game[] = [
  {
    id: 'brick-breaker',
    metaTitle: 'Brick Breaker | Brick Breaker Classic | Brick Breaker Mania | Smash Bricks Game | Brick Breaker Master',
    title: 'Brick Breaker',
    description: `Crash into chaos with Brick Breaker Game—where retro meets revolution! Smash vibrant circular brick formations using ricocheting balls, unlock fiery power-ups, and race against time in adrenaline-pumping modes. Perfect your aim to trigger color-combo bonuses, or unleash laser blasts for explosive chain reactions! Play instantly on any browser—no downloads, no ads—and climb global leaderboards to claim glory. Whether you’re a nostalgia-chaser or a score-hungry strategist, this HTML5 gem delivers endless thrills. Ready to break boundaries? The bricks—and the bragging rights—await!`,
    thumbnail: '/games/brick-breaker.jpg',
    url: 'https://storage.y8.com/y8-studio/html5/akeemywka/brick_breaker_v2',
    supportMobile: false,
    category: ['Casual'],
    featured: true,
    graphics: 3,
    sound: 4,
    difficulty: 3,
    overall: 5,
    review: `Brick Breaker Game revitalizes the classic arcade formula with HTML5 efficiency, offering responsive browser-based gameplay ideal for casual sessions. Its core loop combines traditional brick-breaking mechanics with strategic depth via power-ups like multi-ball, laser beams, and paddle modifiers. The circular brick arrangement introduces fresh spatial challenges, while a color-matching minigame boosts score multipliers, adding layers of tactical decision-making. Performance is smooth across devices, though minimalist UI design occasionally obscures advanced controls (e.g., power-up activation). Community features like leaderboards and achievements enhance replayability, but the lack of narrative progression may deter story-driven players. A polished, platform-agnostic experience for purists seeking retro-inspired innovation.`
  },
  {
    id: 'sprunki-phase-15',
    metaTitle: 'Sprunki Phase 15 | Sprunki | Phase 15',
    title: 'Sprunki Phase 15',
    description: `Unleash chaos and creativity in Sprunki Phase 15—a HTML5 rhythm game where music meets horror! Drag eerie characters onto a soundboard to craft electrifying beats, blending retro synths and haunting vocals. But beware: harmony can trigger "Cursed Mode," warping melodies into nightmarish soundscapes as characters mutate into grotesque, parasite-infected forms. Challenge friends in community-designed levels, share spine-chilling tracks, or survive rhythm-based jump scares. With no downloads and seamless browser play, it’s perfect for on-the-go experimentation. Whether composing or conquering terror, Phase 15 delivers a uniquely unsettling musical odyssey. Ready to mix, scare, and conquer? The abyss—and your masterpiece—awaits!`,
    thumbnail: '/games/sprunki-phase-15.jpg',
    url: 'https://iframegame.com/embed/sprunki-phase-15/index.html',
    supportMobile: false,
    category: ['Sprunki'],
    featured: true,
    graphics: 3,
    sound: 4,
    difficulty: 4,
    overall: 4,
    review: `Sprunki Phase 15 redefines interactive music creation with its HTML5-driven horror-tinged rhythm mechanics. Built as a fan mod of Incredibox, it leverages Web Audio API and CSS3 animations for seamless audio-visual synchronization, enabling players to drag characters onto a dynamic soundboard to compose layered tracks spanning retro synth, EDM, and distorted vocal effects. The game’s standout "Cursed Mode" introduces unpredictable jump scares and corrupted audio layers, amplifying tension through grotesque character mutations and dissonant tonal shifts. While its minimalist UI ensures accessibility, advanced features like mixed-genre editing require experimentation. Community-driven level sharing adds replayability, though uneven difficulty spikes may frustrate purists. Lightweight and browser-compatible, it excels as a subversive, platform-agnostic creative tool.`
  },
  {
    id: 'weapon-survivor',
    metaTitle: 'Weapon Survivor | Weapon Survivor Game | Weapon',
    title: 'Weapon Survivor Game',
    description: `Survive the apocalypse in Weapon Survivor Game—an HTML5 shooter where every bullet counts! Dive into chaotic, ever-changing wastelands, wielding an arsenal from pistols to rocket launchers to fend off relentless foes. Team up with friends in online co-op, fortify shelters, and unlock deadly upgrades to outlast waves of enemies. With no downloads and instant browser play, it’s perfect for bite-sized chaos. Will you scavenge, strategize, and dominate… or become another casualty of the ruins? The wasteland awaits your trigger finger!`,
    thumbnail: '/games/weapon-survivor.jpg',
    url: 'https://html5.gamemonetize.co/il6zfmm5mz5v9prx247i9lyzllds0kbt/',
    supportMobile: false,
    category: ['Adventure'],
    featured: true,
    graphics: 4,
    sound: 4,
    difficulty: 5,
    overall: 5,
    review: `Weapon Survivor Game is a compact yet intense HTML5 shooter that merges survival mechanics with fast-paced combat. Players navigate procedurally generated post-apocalyptic maps, scavenging resources and battling enemies using diverse firearms (rifles, shotguns, rocket launchers) with distinct tactical trade-offs. The adaptive difficulty curve and upgrade system reward strategic play, though minimalist UI design occasionally obscures advanced controls. Browser-based optimization ensures smooth performance, while cooperative multiplayer modes amplify replayability. However, repetitive enemy AI and limited narrative depth hinder long-term engagement. Ideal for quick sessions, it balances accessibility with challenge, positioning itself as a competent entry in the browser-based survival shooter genre.`,
  },
  {
    id: 'sprunki-phase-9',
    metaTitle: 'sprunki phase 9 | sprunki fase 9',
    title: 'Sprunki Phase 9',
    description: `Dive into Sprunki Phase 9—a HTML5 rhythm game where creativity collides with chaos! Craft electrifying tracks by dragging quirky characters onto a soundboard, each unleashing unique beats, synths, or spine-chilling vocal effects. But beware: harmonious combos may trigger "Horror Mode," transforming cheerful melodies into nightmarish soundscapes as characters mutate into grotesque, parasite-infected forms. Share your eerie creations or conquer community-designed challenges in dual portrait/landscape modes. With its vibrant graffiti-inspired art and seamless browser play, Phase 9 is perfect for on-the-go experimentation. Whether composing or surviving jump scares, this mod delivers a fresh, unsettling twist on music-making. Ready to mix, scare, and conquer? The madness awaits!`,
    thumbnail: '/games/sprunki9.webp',
    url: 'https://iframegame.com/embed/sprunki-phase-9/index.html',
    supportMobile: true,
    category: ['Sprunki'],
    featured: true,
    graphics: 4,
    sound: 5,
    difficulty: 5,
    overall: 5,
    review: `Sprunki Phase 9 reinvigorates the Incredibox formula with a fan-driven HTML5 twist, blending intuitive music creation with a haunting aesthetic. Players drag characters representing beats, melodies, and eerie vocal effects onto a dynamic soundboard to compose layered tracks spanning genres like electronic and retro synth. The mod introduces a "Horror Mode," triggered by specific combinations, which distorts visuals and audio into grotesque, parasite-themed animations and dissonant tones. While its minimalist UI ensures accessibility, advanced editing tools remain underutilized, and uneven difficulty spikes in community-designed levels may frustrate purists. Lightweight and browser-compatible, it excels as a platform-agnostic creative sandbox, though its reliance on shock value occasionally overshadows rhythmic cohesion.`
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




  
  {
    id: 'cool-math-games',
    metaTitle: 'Cool Math Games For Kids | Cool Math Games | Cool Math',
    title: 'Cool Math Games For Kids',
    description: `Spark a love for numbers with Cool Math Games for Kids—where learning math feels like play! Designed for ages 3–12, this HTML5 game turns equations into adventures: solve puzzles by popping bubbles, race against time in multiplication challenges, or manage a virtual ice cream shop! Vibrant graphics and quirky characters keep young minds engaged while mastering arithmetic, fractions, and more. No ads, no downloads—just instant, on-the-go fun! Parents can track progress as kids unlock achievements and tackle adaptive difficulty levels. Perfect for classrooms or family bonding, it’s math made magical. Ready to level up their skills? Let the numbers dance!`,
    thumbnail: '/games/cool-math-games.jpg',
    url: 'https://html5.gamemonetize.co/egta6kf9xsirev9y5h0l0r28m30hiuv6/',
    supportMobile: true,
    category: ['Kids'],
    featured: true,
    graphics: 4,
    sound: 3,
    difficulty: 3,
    overall: 4,
    review: `Cool Math Games for Kids excels as an educational HTML5 web game, offering adaptive math challenges for ages 3–12. Its core mechanics focus on foundational arithmetic (addition, subtraction, multiplication, division) and advanced topics like fractions and exponents, delivered through mini-games such as timed drills and logic puzzles. The adaptive learning system tailors difficulty to user performance, ensuring progressive skill development. While the minimalist interface is intuitive, advanced features like mixed-operation modes require guided navigation for younger players. Lightweight and browser-compatible, it runs seamlessly across devices without downloads. Despite lacking narrative depth, its ad-free model and structured curriculum make it a reliable supplementary tool for math fluency.`
  },
]; 