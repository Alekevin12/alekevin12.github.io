"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="ak-portfolio-theme"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </ThemeProvider>
  )
}
