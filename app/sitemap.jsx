export default function sitemap() {
  return [
    {
      url: 'https://nolojenga.com',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://nolojenga.com/authentication/login',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://nolojenga.com/authentication/signin',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://nolojenga.com/dashboard',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/management',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/properties',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/sales',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/settings',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/transaction',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://nolojenga.com/not-found',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}