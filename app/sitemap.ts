import { games } from '@/data/games'

export default async function sitemap() {
  const baseUrl = 'https://your-domain.com'
  
  // Get URLs for all game pages
  const gamesUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Static page URLs
  const staticPages = [
    '',
    '/games',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/copyright',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.5,
  }))

  return [...staticPages, ...gamesUrls]
} 