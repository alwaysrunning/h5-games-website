import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { games } from '@/data/games';
import FullscreenButton from '@/app/components/FullscreenButton';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const game = games.find(g => g.id === id);
  
  if (!game) {
    return {
      title: 'Game Not Found'
    }
  }

  return {
    title: `${game.title} - Game Details`,
    description: game.description,
    keywords: `${game.title}, ${game.description}`,
  }
}

export default async function GameDetail({ params }: Props) {
  const { id } = await params;
  const game = games.find(g => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="max-w-4xl mx-auto text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {game.title}
      </h1>
      
      <div className="max-w-4xl mx-auto w-full aspect-[16/9] bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden shadow-lg">
        <iframe 
          src={game.url}
          className="w-full h-full border-0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-b-xl py-2 px-4">
        <div className="flex justify-end items-center">
          <FullscreenButton />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Game Details</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{game.description}</p>
      </div>
    </div>
  );
} 