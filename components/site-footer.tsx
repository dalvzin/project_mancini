'use client'

import { LANGS } from '@/lib/i18n/dictionaries'
import { useLang } from '@/lib/i18n/provider'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  const { lang, setLang, t } = useLang()
  const year = new Date().getFullYear()

  const links = [
    { href: '#story', label: t.nav.famiglia },
    { href: '#houses', label: t.nav.ristorante },
    { href: '#menu', label: t.nav.menu },
    { href: '#events', label: t.nav.eventos },
    { href: '#giftcard', label: t.nav.giftcard },
    { href: '#calligraphia', label: t.nav.calligraphia },
    { href: '#delivery', label: t.nav.delivery },
    { href: '#contact', label: t.nav.contato },
  ]

  return (
    <footer className="paper-grain relative bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <p className="text-center font-serif text-[13vw] italic leading-none text-cream md:text-[9vw]">
          {t.footer.statement}
        </p>
        <p className="mt-6 text-center eyebrow text-beige">{t.footer.tagline}</p>

        <div className="mt-20 grid gap-12 border-t border-cream/15 pt-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark className="h-12 w-auto" />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-cream/60">
              {t.contact.address}
            </p>
          </div>

          <nav aria-label={t.footer.nav} className="md:col-span-4">
            <p className="eyebrow mb-5 text-cream/40">{t.footer.nav}</p>
            <ul className="grid grid-cols-2 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-sm font-light text-cream/80">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5 text-cream/40">{t.footer.language}</p>
            <div className="flex gap-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                    lang === l.code ? 'border-beige bg-beige text-ink' : 'border-cream/25 text-cream/70 hover:border-cream/60'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <p className="eyebrow mb-3 mt-10 text-cream/40">{t.footer.follow}</p>
            <div className="flex gap-4 text-sm font-light text-cream/80">
              <a href="https://www.instagram.com/famigliamancini/" target="_blank" rel="noopener noreferrer" className="link-underline">
                Instagram
              </a>
              <a href="https://www.famigliamancini.com.br/" target="_blank" rel="noopener noreferrer" className="link-underline">
                Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-8 text-[0.7rem] uppercase tracking-[0.16em] text-cream/40 md:flex-row">
          <span>© {year} Famiglia Mancini. {t.footer.rights}</span>
          <span>{t.footer.made}</span>
        </div>
      </div>
    </footer>
  )
}
