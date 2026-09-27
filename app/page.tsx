import { LanguageProvider } from '@/lib/i18n/provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { Houses } from '@/components/houses'
import { MenuExperience } from '@/components/menu-experience'
import { Signature } from '@/components/signature'
import { Music } from '@/components/music'
import { Events } from '@/components/events'
import { GiftCard } from '@/components/giftcard'
import { Calligraphia } from '@/components/calligraphia'
import { Delivery } from '@/components/delivery'
import { Gallery } from '@/components/gallery'
import { Street } from '@/components/street'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Famiglia Mancini',
  servesCuisine: 'Italian',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Avanhandava, 81',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  telephone: '+55 11 3256-4320',
  url: 'https://famigliamancini.com.br',
  foundingDate: '1980',
}

export default function Page() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Houses />
        <MenuExperience />
        <Signature />
        <Music />
        <Events />
        <GiftCard />
        <Calligraphia />
        <Delivery />
        <Gallery />
        <Street />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
