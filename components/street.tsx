'use client'

import { useScroll, useTransform, motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { SectionLabel } from './reveal'

export function Street() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '12%'])

  return (
    <section ref={ref} className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-espresso text-cream">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <Image
          src="/images/avanhandava-street.png"
          alt="Fachada iluminada dos restaurantes da Famiglia Mancini na Rua Avanhandava"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/60" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-20 md:px-10 md:pb-28">
        <SectionLabel className="text-beige">{t.street.label}</SectionLabel>
        <h2 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[0.95] md:text-8xl">
          {t.street.title}
        </h2>
        <p className="mt-6 max-w-xl text-pretty font-light leading-relaxed text-cream/80 md:text-lg">
          {t.street.text}
        </p>
      </div>
    </section>
  )
}
