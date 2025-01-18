 
import { Game } from '@/data/games';
import Image from 'next/image';

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
        <Image 
          src={game.thumbnail} 
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded"
          priority={false}
        />
      </div>
      <h3 className="font-semibold text-gray-800 dark:text-white">
        {game.title}
      </h3>
    </div>
  );
} 