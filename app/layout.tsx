import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Allura } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

const siteUrl = 'https://famigliamancini.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Famiglia Mancini — Trattoria, Ristorante e Pizzaria na Rua Avanhandava',
    template: '%s · Famiglia Mancini',
  },
  description:
    'Dal 1980, a mesa continua posta. Uma família, uma história, uma tradição italiana no coração de São Paulo, na Rua Avanhandava.',
  keywords: [
    'Famiglia Mancini',
    'restaurante italiano São Paulo',
    'Rua Avanhandava',
    'trattoria',
    'ristorante',
    'pizzaria',
    'cantina italiana',
  ],
  authors: [{ name: 'Famiglia Mancini' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'it_IT'],
    url: siteUrl,
    siteName: 'Famiglia Mancini',
    title: 'Famiglia Mancini — Uma Famiglia. Uma História. Uma Mesa.',
    description:
      'Dal 1980, a mesa continua posta. Tradição italiana no coração de São Paulo, na Rua Avanhandava.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Famiglia Mancini',
    description: 'Dal 1980, a mesa continua posta. Rua Avanhandava, São Paulo.',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      en: '/?lang=en',
      it: '/?lang=it',
    },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#7a1e21',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
