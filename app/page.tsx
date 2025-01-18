'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { games } from '@/data/games';
import GameCard from './components/GameCard';

function GamesList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const filtered = games.filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase()) ||
      game.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">
        {filteredGames.map(game => (
          <GameCard 
            key={game.id} 
            game={game}
          />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No games found. Please try different keywords.
          </p>
        </div>
      )}
    </div>
  );
}

export default function GamesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamesList />
    </Suspense>
  );
} 