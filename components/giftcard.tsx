'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'
import { Wordmark } from './wordmark'

export function GiftCard() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <section id="giftcard" className="relative overflow-hidden bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <div>
          <Reveal>
            <SectionLabel className="text-beige">{t.giftcard.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] md:text-6xl">
              {t.giftcard.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-pretty font-light leading-relaxed text-cream/75 md:text-lg">
              {t.giftcard.text}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border border-cream/40 px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              {t.giftcard.cta}
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <motion.div
            initial={false}
            whileHover={reduce ? undefined : { rotateX: 6, rotateY: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="relative mx-auto aspect-[16/10] w-full max-w-md overflow-hidden rounded-sm shadow-2xl"
          >
            <Image src="/images/giftcard.png" alt="" fill sizes="(max-width:768px) 90vw, 40vw" className="object-cover" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-tr from-rosso/70 via-espresso/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <Wordmark className="h-10 w-auto text-cream" />
              <div>
                <p className="eyebrow text-cream/70">Gift Card</p>
                <p className="mt-1 font-serif text-3xl italic text-cream">Buon Appetito</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
