import { useState } from 'react'
import translations from '../data/translations.json'

export function useLanguage() {
  const [lang, setLang] = useState('sv')

  const t = translations[lang]

  const toggle = () => setLang(l => l === 'sv' ? 'en' : 'sv')

  return { lang, t, toggle }
}
