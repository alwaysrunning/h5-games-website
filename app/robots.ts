export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/games/*',
        ],
        disallow: [
          '/api/',
        ],
      },
    ],
    sitemap: 'https://unblockh5games.com/sitemap.xml',
    host: 'https://unblockh5games.com',
  }
} 