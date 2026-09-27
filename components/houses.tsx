'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

const imageFor: Record<string, string> = {
  trattoria: '/images/trattoria.png',
  ristorante: '/images/ristorante.png',
  pizzaria: '/images/pizzaria.png',
}

export function Houses() {
  const { t } = useLang()

  return (
    <section id="houses" className="relative bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-16 max-w-3xl md:mb-24">
          <Reveal>
            <SectionLabel className="text-beige">{t.houses.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] md:text-6xl">
              {t.houses.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty font-light leading-relaxed text-cream/70">
              {t.houses.intro}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {t.houses.items.map((house, i) => (
            <Reveal key={house.id + i} delay={i * 60}>
              <article className="group grid items-center gap-6 border-t border-cream/15 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-baseline gap-4 md:col-span-4 md:block">
                  <span className="font-serif text-sm italic text-beige md:mb-2 md:block">
                    {house.year}
                  </span>
                  <h3 className="font-serif text-4xl leading-none md:text-5xl lg:text-6xl">
                    <span className="block text-cream/60 text-xl font-light not-italic tracking-[0.2em] uppercase md:text-sm">
                      {house.kind}
                    </span>
                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      {house.name}
                    </span>
                  </h3>
                </div>

                <div className="relative overflow-hidden md:col-span-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[4/3]">
                    <Image
                      src={imageFor[house.id]}
                      alt={`${house.name} — ${house.kind}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-rosso/0 transition-colors duration-500 group-hover:bg-rosso/15" />
                  </div>
                </div>

                <div className="md:col-span-4 md:pl-4">
                  <p className="text-pretty font-light leading-relaxed text-cream/75">
                    {house.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {house.traits.map((trait) => (
                      <li
                        key={trait}
                        className="rounded-full border border-cream/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-cream/70"
                      >
                        {trait}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#menu"
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-beige"
                  >
                    <span className="link-underline">{t.houses.discover}</span>
                    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-cream/15" />
        </div>
      </div>
    </section>
  )
}
