'use client'

import { useState } from 'react'
import { useLang } from '@/lib/i18n/provider'
import { houses, formatBRL, PDF_URL, type HouseId } from '@/lib/menu-data'
import { Reveal, SectionLabel } from './reveal'

export function MenuExperience() {
  const { lang, t } = useLang()
  const [activeHouse, setActiveHouse] = useState<HouseId>('trattoria')
  const [activeCat, setActiveCat] = useState(0)

  const house = houses.find((h) => h.id === activeHouse) ?? houses[0]
  const category = house.categories[activeCat] ?? house.categories[0]

  const selectHouse = (id: HouseId) => {
    setActiveHouse(id)
    setActiveCat(0)
  }

  return (
    <section id="menu" className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel className="text-rosso">{t.menu.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] text-ink md:text-6xl">
                {t.menu.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-pretty font-light leading-relaxed text-ink-soft">
                {t.menu.intro}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 self-start border border-ink/25 px-6 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {t.menu.openPdf}
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        {/* House selector */}
        <Reveal>
          <div
            role="tablist"
            aria-label={t.menu.selectHouse}
            className="flex flex-wrap gap-x-8 gap-y-3 border-t border-b border-ink/15 py-5"
          >
            {houses.map((h) => {
              const active = h.id === activeHouse
              return (
                <button
                  key={h.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => selectHouse(h.id)}
                  className="group text-left"
                >
                  <span
                    className={`block text-[0.62rem] uppercase tracking-[0.24em] transition-colors ${
                      active ? 'text-rosso' : 'text-ink/40'
                    }`}
                  >
                    {h.kind[lang]}
                  </span>
                  <span
                    className={`font-serif text-2xl italic transition-colors md:text-3xl ${
                      active ? 'text-ink' : 'text-ink/45 group-hover:text-ink/70'
                    }`}
                  >
                    {h.name}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Category nav */}
          <div className="lg:col-span-3">
            <nav aria-label={t.menu.label} className="sticky top-28 flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
              {house.categories.map((cat, i) => {
                const active = i === activeCat
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCat(i)}
                    className={`group flex items-center gap-3 text-left transition-colors ${
                      active ? 'text-rosso' : 'text-ink/55 hover:text-ink'
                    }`}
                  >
                    <span
                      className={`hidden h-px bg-current transition-all duration-500 lg:block ${
                        active ? 'w-8 opacity-100' : 'w-3 opacity-40'
                      }`}
                    />
                    <span className="text-lg md:text-xl">{cat.label[lang]}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Items */}
          <div key={activeHouse + activeCat} className="lg:col-span-9">
            <h3 className="mb-6 font-serif text-3xl italic text-ink/30">{category.label[lang]}</h3>
            <ul className="flex flex-col">
              {category.items.map((item, i) => (
                <Reveal as="li" key={item.name} delay={i * 40}>
                  <div className="group flex items-baseline gap-4 border-b border-dashed border-ink/20 py-5">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-xl text-ink transition-colors group-hover:text-rosso md:text-2xl">
                        {item.name}
                      </h4>
                      <p className="mt-1 max-w-xl text-pretty text-sm font-light leading-relaxed text-ink-soft">
                        {item.desc[lang]}
                      </p>
                    </div>
                    <span aria-hidden className="mx-2 hidden flex-1 self-end border-b border-dotted border-ink/25 sm:block" />
                    {item.price != null && (
                      <span className="shrink-0 font-serif text-xl italic text-ink md:text-2xl">
                        {formatBRL(item.price)}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-ink/40">
              {t.menu.priceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
