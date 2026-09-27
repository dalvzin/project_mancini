'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

type GalleryImage = { src: string; alt: string; className: string }

const images: GalleryImage[] = [
  { src: '/images/gallery-1.png', alt: 'Mesa italiana farta com antepastos', className: 'md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto' },
  { src: '/images/trattoria.png', alt: 'Salão da trattoria', className: 'md:col-span-5 aspect-[4/3]' },
  { src: '/images/gallery-2.png', alt: 'Detalhe de prato de massa', className: 'md:col-span-5 aspect-square' },
  { src: '/images/pizzaria.png', alt: 'Forno da pizzaria', className: 'md:col-span-4 aspect-[3/4]' },
  { src: '/images/gallery-3.png', alt: 'Taças de vinho ao entardecer', className: 'md:col-span-4 aspect-[3/4]' },
  { src: '/images/ristorante.png', alt: 'Ambiente do ristorante', className: 'md:col-span-4 aspect-[3/4]' },
]

export function Gallery() {
  const { t } = useLang()
  const [active, setActive] = useState<GalleryImage | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="gallery" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <SectionLabel className="text-rosso">{t.gallery.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.02] text-ink md:text-6xl">
              {t.gallery.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-12 md:gap-4">
          {images.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 3) * 60} className={img.className}>
              <button
                type="button"
                onClick={() => setActive(img)}
                className="group relative h-full w-full overflow-hidden"
                aria-label={`Ampliar imagem: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" />
                <span className="absolute bottom-3 left-3 translate-y-2 text-[0.62rem] uppercase tracking-[0.2em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 md:p-10"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 text-cream eyebrow"
            >
              {t.nav.closeLabel} ✕
            </button>
            <motion.figure
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full">
                <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 text-center text-sm font-light text-cream/70">{active.alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
