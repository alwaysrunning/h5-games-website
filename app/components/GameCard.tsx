/* eslint-disable @next/next/no-img-element */
import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
      onClick={() => {
        window.open(`/games/${game.id}`, '_blank');
      }}>
      <div className="aspect-[16/9] relative mb-2">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="font-semibold text-gray-800 dark:text-white">
        {game.title}
      </h3>
    </div>
  );
} 