'use client'

import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Avanhandava+Bela+Vista+Sao+Paulo'

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <SectionLabel className="text-beige">{t.contact.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-pretty font-light leading-relaxed text-cream/70 md:text-lg">
              {t.contact.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Three houses contact cards */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {t.contact.houses.map((house, i) => (
                <Reveal key={house.kind} delay={i * 80}>
                  <article className="group grid grid-cols-1 gap-4 border-t border-cream/15 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                    <div className="md:col-span-5">
                      <span className="block text-[0.62rem] uppercase tracking-[0.24em] text-beige">
                        {house.kind}
                      </span>
                      <h3 className="mt-2 font-serif text-3xl italic leading-none md:text-4xl">
                        {house.name}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className="eyebrow text-cream/40">{t.contact.emailLabel}</p>
                      <p className="mt-2 font-serif text-lg italic text-cream/90">{house.address}</p>
                    </div>
                    <div className="flex items-end md:col-span-3 md:justify-end">
                      <a
                        href={`tel:${house.phone}`}
                        className="link-underline font-serif text-2xl italic text-cream transition-colors hover:text-beige"
                      >
                        {house.phoneDisplay}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
              <div className="border-t border-cream/15" />
            </div>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div>
                  <p className="eyebrow text-cream/50">{t.contact.hoursLabel}</p>
                  <p className="mt-2 text-lg font-light text-cream/80">{t.contact.hours}</p>
                </div>
                <div className="hidden h-10 w-px bg-cream/15 sm:block" />
                <div>
                  <p className="eyebrow text-cream/50">{t.contact.emailLabel}</p>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="link-underline mt-2 block text-lg font-light text-cream/80"
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${t.contact.houses[0].phone}`}
                  className="group inline-flex items-center gap-2 bg-rosso px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rosso-bright"
                >
                  {t.contact.call}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-cream/40 px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-espresso"
                >
                  {t.contact.directions}
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-cream/15 lg:aspect-auto lg:h-full lg:min-h-[480px]"
                aria-label={t.contact.directions}
              >
                <iframe
                  title="Mapa — Rua Avanhandava, Bela Vista, São Paulo"
                  src="https://www.google.com/maps?q=Rua+Avanhandava+Bela+Vista+Sao+Paulo&output=embed"
                  className="pointer-events-none h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-transparent" />
                <span className="absolute bottom-4 left-4 text-[0.62rem] uppercase tracking-[0.2em] text-cream/80">
                  Rua Avanhandava · Bela Vista · São Paulo
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
