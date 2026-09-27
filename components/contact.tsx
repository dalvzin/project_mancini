'use client'

import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Avanhandava+81+Bela+Vista+Sao+Paulo'
const PHONE_DISPLAY = '+55 11 3256-4320'
const PHONE_TEL = '+551132564320'

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel className="text-beige">{t.contact.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
                {t.contact.title}
              </h2>
            </Reveal>

            <div className="mt-12 space-y-8">
              <Reveal delay={120}>
                <div>
                  <p className="eyebrow text-cream/50">{t.contact.addressLabel}</p>
                  <p className="mt-2 font-serif text-2xl italic md:text-3xl">{t.contact.address}</p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div>
                  <p className="eyebrow text-cream/50">{t.contact.phoneLabel}</p>
                  <a href={`tel:${PHONE_TEL}`} className="link-underline mt-2 inline-block font-serif text-2xl italic md:text-3xl">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <p className="eyebrow text-cream/50">{t.contact.hoursLabel}</p>
                  <p className="mt-2 text-lg font-light text-cream/80">{t.contact.hours}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
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

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-cream/15"
                aria-label={t.contact.directions}
              >
                <iframe
                  title="Mapa — Rua Avanhandava, Bela Vista, São Paulo"
                  src="https://www.google.com/maps?q=Rua+Avanhandava+81+Bela+Vista+Sao+Paulo&output=embed"
                  className="pointer-events-none h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-transparent" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
