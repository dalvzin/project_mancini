'use client'

import { useScroll, useTransform, motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'

export function Hero() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-40%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-espresso">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src="/images/hero-trattoria.png"
          alt="Salão de uma trattoria italiana da Famiglia Mancini ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/25 to-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="paper-grain relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-24 text-cream md:px-10 md:pb-28"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="eyebrow mb-6 text-beige"
          >
            {t.hero.label}
          </motion.p>

          <h1 className="font-serif text-[15vw] leading-[0.86] tracking-tight sm:text-[12vw] md:text-[8.5vw] lg:text-[7.5vw]">
            {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.13, ease: [0.19, 1, 0.22, 1] }}
                >
                  {i === 1 ? <em className="italic text-beige">{line}</em> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-cream/80 md:text-lg"
          >
            {t.hero.intro}
          </motion.p>
        </div>
      </motion.div>

      <motion.a
        href="#story"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70"
        aria-label={t.hero.scroll}
      >
        <span className="eyebrow text-[0.6rem]">{t.hero.scroll}</span>
        <span className="relative flex h-12 w-px overflow-hidden bg-cream/25">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-full bg-beige"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
