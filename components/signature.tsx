'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

const dishImages = ['/images/dish-spaghetti.png', '/images/dish-ossobuco.png', '/images/dish-tiramisu.png']

export function Signature() {
  const { t } = useLang()

  return (
    <section className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <SectionLabel className="text-rosso">{t.signature.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] text-ink md:text-6xl">
              {t.signature.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 font-serif text-2xl italic text-ink-soft">{t.signature.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {t.signature.dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 100}>
              <article className={`group ${i === 1 ? 'md:mt-20' : ''} ${i === 2 ? 'md:mt-8' : ''}`}>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={dishImages[i]}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
                  />
                  <span className="paper-grain absolute inset-0" />
                </div>
                <p className="mt-5 text-[0.62rem] uppercase tracking-[0.24em] text-rosso">{dish.house}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-ink md:text-3xl">{dish.name}</h3>
                <p className="mt-2 max-w-sm text-pretty text-sm font-light leading-relaxed text-ink-soft">
                  {dish.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
