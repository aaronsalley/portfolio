import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aaron Salley',
    short_name: 'Portfolio',
    description: 'Portfolio for Aaron Salley',
    start_url: '/?source=pwa',
    display: 'standalone',
    icons: [
      {
        src: '/memoji_computer.svg',
        sizes: 'any',
      },
    ],
    theme_color: '#f8f9fa',
    background_color: '#f8f9fa',
    shortcuts: [
      {
        name: 'Contact me',
        short_name: 'Email',
        description: 'Get in touch to work together',
        url: '/contact',
        icons: [
          {
            src: '/media/Aaron-Salley-Disruptv-NYC-icon--onLight192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
  };
}
