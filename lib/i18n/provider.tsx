'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { dictionaries, type Dictionary, type Lang } from './dictionaries'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
      window.localStorage.getItem('fm-lang')) as Lang | null
    if (stored && stored in dictionaries) {
      setLangState(stored)
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem('fm-lang', l)
      document.documentElement.lang = l === 'pt' ? 'pt-BR' : l
    } catch {
      /* ignore */
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
