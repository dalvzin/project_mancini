'use client'

import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

export function Delivery() {
  const { t } = useLang()

  return (
    <section id="delivery" className="relative bg-rosso py-24 text-cream md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel className="text-cream/70">{t.delivery.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] md:text-6xl">
                {t.delivery.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-pretty font-light leading-relaxed text-cream/80 md:text-lg">
                {t.delivery.text}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://www.famigliamancini.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-cream px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-beige"
              >
                {t.delivery.cta}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </a>
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-cream/60">
                {t.delivery.note}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
