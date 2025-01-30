'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { games } from '@/data/games';
import GameCard from './components/GameCard';

function GamesList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [filteredGames, setFilteredGames] = useState(games);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  useEffect(() => {
    const checkMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    };
    setIsMobileDevice(checkMobile());
  }, []);

  useEffect(() => {
    const filtered = games.filter(game => {
      if (isMobileDevice) {
        return game.supportMobile || false;
      }
      return true;
    }).filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [query, isMobileDevice]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">
        {currentGames.map(game => (
          <GameCard 
            key={game.id} 
            game={game}
          />
        ))}
      </div>

      {filteredGames.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No games found. Please try different keywords.
          </p>
        </div>
      ) : (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(filteredGames.length / gamesPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GamesPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48"></div>
              <div className="mt-4 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }>
      <GamesList />
    </Suspense>
  );
} 