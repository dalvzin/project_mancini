'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

export function Calligraphia() {
  const { t } = useLang()

  return (
    <section id="calligraphia" className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="text-rosso">{t.calligraphia.label}</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-8 font-script text-6xl leading-none text-rosso md:text-7xl">Calligraphia</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.05] text-ink md:text-5xl">
                {t.calligraphia.title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-md text-pretty font-light leading-relaxed text-ink-soft md:text-lg">
                {t.calligraphia.text}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 eyebrow text-ink/50">{t.calligraphia.detail}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <figure className="group relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/calligraphia.png"
                  alt="Detalhe de caligrafia e arte gráfica italiana da Famiglia Mancini"
                  fill
                  sizes="(max-width: 1024px) 90vw, 55vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
                />
                <span className="paper-grain absolute inset-0" />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
