import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { games } from '@/data/games';
import FullscreenButton from '@/app/components/FullscreenButton';
import ShareButton from '@/app/components/ShareButton';
import GameIframe from '@/app/components/GameIframe';


// type Props = {
//   params: {
//     id: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const game = games.find(g => g.id === id);
  
  if (!game) {
    return {
      title: 'Game Not Found'
    }
  }

  const title = `${game.title} - Unblock H5 Games`;
  const description = game.description;
  const keywords = `${game.title}, ${game.description}, online game, html5 game`;
  const url = `https://unblockh5games.com/games/${id}`;
  const imageUrl = game.thumbnail || 'https://unblockh5games.com/default-game-image.jpg';

  return {
    metadataBase: new URL('https://unblockh5games.com'),
    title: title,
    description: description.length > 120 ? description.slice(0, 120) + '...' : description,
    keywords,
    alternates: {
      canonical: `https://unblockh5games.com/games/${id}`,
    },
    openGraph: {
      title: title,
      description: description.length > 120 ? description.slice(0, 120) + '...' : description,
      url: url,
      siteName: 'Unblock H5 Games',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description.length > 120 ? description.slice(0, 120) + '...' : description,
      images: [imageUrl],
      creator: '@UnblockH5Games',
      site: '@UnblockH5Games',
    },
  }
}

export default async function GameDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = games.find(g => g.id === id);

  if (!game) {
    notFound();
  }

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "image": game.thumbnail,
    "url": `https://unblockh5games.com/games/${id}`,
    "genre": game.category,
    "gamePlatform": "Web Browser",
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Unblock H5 Games",
      "url": "https://unblockh5games.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
            <h2 className="text-3xl font-bold text-center sm:text-left">{game.title}</h2>
            <div className="flex justify-center sm:justify-end">
              <ShareButton 
                url={`https://unblockh5games.com/games/${id}`}
                title={`${game.title} - Unblock H5 Games`}
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto w-full aspect-[16/9] bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden shadow-lg">
          <GameIframe url={game.url} originalUrl={game.originalUrl} />
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
    </>
  );
} 