'use client'

import Image from 'next/image'
import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

export function Story() {
  const { t } = useLang()

  return (
    <section id="story" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="text-rosso">{t.story.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.02] text-ink md:text-5xl lg:text-6xl">
                {t.story.title}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-pretty text-base font-light leading-relaxed text-ink-soft md:text-lg">
                {t.story.lead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <figure className="relative mt-12 aspect-[4/5] w-full max-w-md overflow-hidden">
                <Image
                  src="/images/heritage-1980.png"
                  alt="Retrato em tom sépia da família fundadora da Famiglia Mancini nos anos 1980"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <span className="paper-grain absolute inset-0" />
                <figcaption className="absolute bottom-4 left-4 font-script text-3xl text-cream drop-shadow">
                  {t.hero.since}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <ol className="relative border-l border-ink/15">
              {t.story.timeline.map((item, i) => (
                <Reveal as="li" key={item.year} delay={i * 90} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
                  <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border border-rosso bg-paper" />
                  <span className="block font-serif text-5xl italic text-rosso md:text-6xl">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-2xl text-ink md:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-pretty font-light leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120}>
              <blockquote className="mt-8 border-t border-ink/15 pt-10">
                <p className="font-serif text-3xl italic leading-tight text-ink md:text-4xl">
                  “{t.story.pull}”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
