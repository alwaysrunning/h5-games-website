'use client';

import { Game } from '@/data/games';

export default function GameReview({ game }: { game: Game }) {

  const renderStars = (count: number) => {
    return Array(5).fill('⭐').map((star, index) => (
      <span key={index} className={`${index < count ? 'opacity-100' : 'opacity-30'}`}>
        {star}
      </span>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-1">Game Review</h2>
      
      <div>
        {/* 评分区域 */}
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Graphics</span>
            <div className="flex ml-4">{renderStars(game.graphics ?? 0)}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Sound</span>
            <div className="flex ml-4">{renderStars(game.sound ?? 0)}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Difficulty</span>
            <div className="flex ml-4">{renderStars(game.difficulty ?? 0)}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Overall</span>
            <div className="flex ml-4">{renderStars(game.overall ?? 0)}</div>  
          </div>
        </div>

        {/* 详细评测 */}
        <div className="mt-2">
          <div className={`text-gray-600 dark:text-gray-300 space-y-3`}>
            <p dangerouslySetInnerHTML={{ __html: game.review ?? '' }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}