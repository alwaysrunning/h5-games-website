export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
        ],
      },
    ],
    sitemap: 'https://unblockh5games.com/sitemap.xml',
    host: 'https://unblockh5games.com',
  }
} 