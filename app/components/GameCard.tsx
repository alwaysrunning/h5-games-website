import { Game } from '@/data/games';

export default function GameCard({ game, onSelect }: { game: Game; onSelect: (game: Game) => void }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: game.title,
    description: game.description,
    image: game.thumbnail,
    genre: game.category,
    url: `https://your-domain.com/games/${game.id}`,
    inLanguage: 'en',
    isAccessibleForFree: true,
    applicationCategory: 'Game',
  };

  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => onSelect(game)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold">{game.title}</h3>
        </div>
      </div>
    </div>
  );
} 