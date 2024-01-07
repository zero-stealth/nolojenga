import '@/app/style/globals.css';
import { Manrope } from 'next/font/google';
import toast, { Toaster } from "react-hot-toast";


const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://nolojenga.com/'),
  title: 'Nolojenga - Property Management Webapp',
  applicationName: 'Nolojenga',
  author: 'Nolojenga',
  description: 'Manage properties, lands, and rentals with Nolojenga. Buy, sell, and rent properties effortlessly.',
  keywords: ['buy land', 'sell land', 'rent property', 'lease property', 'sell property', 'buy property', 'landlord', 'agents'],

  // OG meta tags
  openGraph: {
    title: 'Nolojenga - Property Management Webapp',
    description: 'Manage properties, lands, and rentals with Nolojenga. Buy, sell, and rent properties effortlessly.',
    url: 'https://nolojenga.com/',
    siteName: 'Nolojenga',
    images: '/assets/banner.png',

  },

  //  robots txt
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: 'favicon-16x16.png' }, new URL('favicon-16x16.png', 'https://nolojenga.com')],
    shortcut: ['/public/favicon-32x32.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className={manrope.className}>
          {children}
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 8000,
            style: {
              background: '#ffffff',
              color: '#24233c',
            }}}
        />
      </body>
    </html>
  );
}
