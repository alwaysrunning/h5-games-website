import { games } from '@/data/games'

export default async function sitemap() {
  const baseUrl = 'https://unblockh5games.com'
  
  // Get URLs for all game pages
  const gamesUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }))

  // Static page URLs
  const staticPages = [
    '/',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/copyright',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changefreq: route === '' || route === '/games' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/games' ? 0.9 : 0.5,
  }))

  return [...staticPages, ...gamesUrls]
} 