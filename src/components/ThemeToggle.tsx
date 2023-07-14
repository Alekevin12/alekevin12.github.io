"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useTranslation } from "../app/i18n/client"
import { Locale } from "../app/i18n/settings"

export default function ThemeToggle({ lang }: { lang: Locale }) {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const tThemeToggle = useTranslation(lang, 'ThemeToggle');

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <button className="absolute right-4 top-2 xl:right-2" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  )
}
