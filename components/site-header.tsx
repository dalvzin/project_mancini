'use client'

import { useEffect, useState } from 'react'
import { LANGS } from '@/lib/i18n/dictionaries'
import { useLang } from '@/lib/i18n/provider'
import { Wordmark } from './wordmark'

const navItems = (t: ReturnType<typeof useLang>['t']) => [
  { href: '#story', label: t.nav.famiglia },
  { href: '#houses', label: t.nav.ristorante },
  { href: '#menu', label: t.nav.menu },
  { href: '#music', label: t.nav.pizzaria },
  { href: '#events', label: t.nav.eventos },
  { href: '#giftcard', label: t.nav.giftcard },
  { href: '#calligraphia', label: t.nav.calligraphia },
  { href: '#delivery', label: t.nav.delivery },
  { href: '#contact', label: t.nav.contato },
]

export function SiteHeader() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const items = navItems(t)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? 'bg-espresso/95 text-cream backdrop-blur-sm'
            : 'bg-gradient-to-b from-black/40 to-transparent text-cream'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 md:px-10 md:py-5">
          <a href="#top" className="shrink-0" aria-label="Famiglia Mancini — início">
            <Wordmark className="h-9 w-auto md:h-10" />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 xl:flex 2xl:gap-8"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.78rem] font-light uppercase tracking-[0.18em] transition-opacity hover:opacity-100 opacity-85"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div
              className="hidden items-center gap-1 text-[0.72rem] uppercase tracking-[0.2em] sm:flex"
              role="group"
              aria-label="Selecionar idioma"
            >
              {LANGS.map((l, i) => (
                <span key={l.code} className="flex items-center">
                  {i > 0 && <span className="mx-1 opacity-40">/</span>}
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`transition-opacity ${
                      lang === l.code ? 'opacity-100 underline underline-offset-4' : 'opacity-55 hover:opacity-90'
                    }`}
                    aria-pressed={lang === l.code}
                  >
                    {l.label}
                  </button>
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="eyebrow text-[0.62rem]">
                {open ? t.nav.closeLabel : t.nav.menuLabel}
              </span>
              <span className="relative flex h-4 w-6 flex-col justify-center">
                <span
                  className={`absolute h-px w-6 bg-current transition-transform duration-300 ${
                    open ? 'rotate-45' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`absolute h-px w-6 bg-current transition-transform duration-300 ${
                    open ? '-rotate-45' : 'translate-y-1'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col bg-espresso text-cream transition-[opacity,visibility] duration-500 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="paper-grain flex h-full flex-col overflow-y-auto px-6 pb-12 pt-24">
          <p className="eyebrow mb-8 text-beige">{t.hero.label}</p>
          <nav aria-label="Navegação móvel" className="flex flex-col">
            {items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group border-b border-cream/10 py-4"
                style={{
                  transitionDelay: open ? `${120 + i * 45}ms` : '0ms',
                  transition: 'opacity .6s, transform .6s',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(14px)',
                }}
              >
                <span className="font-serif text-3xl italic text-cream transition-colors group-hover:text-beige sm:text-4xl">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-3 pt-10 text-sm uppercase tracking-[0.2em]">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`rounded-full border px-4 py-2 transition-colors ${
                  lang === l.code
                    ? 'border-rosso-bright bg-rosso text-cream'
                    : 'border-cream/25 text-cream/70'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
