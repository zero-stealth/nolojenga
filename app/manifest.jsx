export default function manifest() {
    return {
      name: 'Nolojenga',
      short_name: 'Nolojenga',
      description: 'Webapp for managing properties, lands and rentals',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }