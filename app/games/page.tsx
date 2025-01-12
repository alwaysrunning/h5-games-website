'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { games } from '@/data/games';
import GameCard from '../components/GameCard';

export default function GamesPage() {
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
      <h1 className="text-3xl font-bold mb-6">Game List</h1>
      
      {query && (
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Search results for "{query}": {filteredGames.length} games
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGames.map(game => (
          <GameCard 
            key={game.id} 
            game={game}
            onSelect={() => window.location.href = `/?game=${game.id}`}
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