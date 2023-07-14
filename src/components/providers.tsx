"use client"

import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="ak-portfolio-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  )
}
