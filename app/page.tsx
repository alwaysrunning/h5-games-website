'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { games } from '@/data/games';
import GameCard from './components/GameCard';
import FullscreenButton from './components/FullscreenButton';

export default function Home() {
  //const router = useRouter();
  return (
    <Suspense fallback={<div>Loading game data...</div>}>
      <GameContentInner />
    </Suspense>
  );
}

function GameContentInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState(
    games.find(game => game.id === searchParams.get('game')) || 
    games.find(game => game.featured)
  );

  useEffect(() => {
    if (selectedGame) {
      router.push(`?game=${selectedGame.id}`, { scroll: false });
    }
  }, [selectedGame, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto p-4 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧游戏区域 */}
          {selectedGame && (
            <div className="lg:w-3/4">
              <div className="sticky top-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedGame.featured ? 'Featured Game' : 'Now Playing'}
                </h1>
                <div className="w-full aspect-[16/9] bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden shadow-lg">
                  <iframe 
                    key={selectedGame.id}
                    src={selectedGame.url}
                    className="w-full h-full border-0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-b-xl py-2 px-4">
                  <div className="flex justify-end items-center">
                    <FullscreenButton />
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-2">Game details</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedGame.description}</p>
                  {/* <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">How to Play</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedGame.howToPlay}</p>
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {/* 右侧游戏列表 */}
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              All Games
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {games.map(game => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onSelect={setSelectedGame}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 