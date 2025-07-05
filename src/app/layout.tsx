import { Header } from '@/components/Header';
import '../styles/globals.css';
import { Providers } from '@/app/Providers';

export const metadata = {
  metadataBase: new URL('https://tuiti.vercel.app'),
  title: 'Tuiti — Un homenaje frontend a Twitter con Next.js',
  description:
    'Una app inspirada en X (Twitter) que permite explorar, comentar y descubrir publicaciones de usuarios. Construida con Next.js, Orval y React Query.',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'Next.js',
    'React Query',
    'Orval',
    'JSONPlaceholder',
    'Frontend App',
    'Twitter Clone',
    'Tuiti',
    'React',
    'UI moderna',
    'TailwindCSS',
  ],
  authors: [{ name: 'Patricio Mainero' }],
  creator: 'Patricio Mainero',
  openGraph: {
    title: 'Tuiti — Un homenaje frontend a Twitter con Next.js',
    description:
      'Una app inspirada en X (Twitter) que permite explorar, comentar y descubrir publicaciones de usuarios. Construida con Next.js, Orval y React Query.',
    url: 'https://tuiti-app.vercel.app/',
    siteName: 'Tuiti',
    images: [
      {
        url: 'https://tuiti-app.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tuiti',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuiti — Explora y comenta publicaciones',
    description:
      'Explorá una app frontend moderna basada en JSONPlaceholder. UI inspirada en Twitter. Hecha con Next.js.',
    creator: '@tu_usuario',
    images: ['https://tuiti-app.vercel.app/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}