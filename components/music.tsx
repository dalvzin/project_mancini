'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

export function Music() {
  const { t } = useLang()

  return (
    <section id="music" className="relative overflow-hidden bg-espresso py-24 text-cream md:py-36">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/music.png" alt="" fill sizes="100vw" className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/40" />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <div>
          <Reveal>
            <SectionLabel className="text-beige">{t.music.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] md:text-6xl">
              {t.music.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-pretty font-light leading-relaxed text-cream/75 md:text-lg">
              {t.music.text}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-10 items-end gap-1" aria-hidden>
                {[0.5, 0.9, 0.4, 1, 0.65, 0.85, 0.35, 0.75].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 origin-bottom rounded-full bg-beige"
                    style={{
                      height: `${h * 100}%`,
                      animation: `eq ${0.8 + i * 0.12}s ease-in-out ${i * 0.08}s infinite`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[0.72rem] uppercase tracking-[0.2em] text-cream/60">
                {t.music.detail}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
