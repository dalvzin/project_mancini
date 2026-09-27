'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

export function Events() {
  const { t } = useLang()

  return (
    <section id="events" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] items-stretch gap-10 px-5 md:grid-cols-2 md:px-10 lg:gap-16">
        <Reveal className="order-2 md:order-1">
          <div className="relative h-full min-h-[420px] w-full overflow-hidden">
            <Image
              src="/images/events.png"
              alt="Salão preparado para uma celebração privada na Famiglia Mancini"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
            <span className="paper-grain absolute inset-0" />
          </div>
        </Reveal>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <Reveal>
            <SectionLabel className="text-rosso">{t.events.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] text-ink md:text-6xl">
              {t.events.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-pretty font-light leading-relaxed text-ink-soft md:text-lg">
              {t.events.text}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {t.events.types.map((type) => (
                <li key={type} className="flex items-center gap-3 text-ink">
                  <span aria-hidden className="h-px w-5 bg-rosso" />
                  <span className="font-serif text-lg italic">{type}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={220}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 self-start bg-rosso px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rosso-bright"
            >
              {t.events.cta}
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
