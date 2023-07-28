"use client"

import { useTranslation } from "@/src/app/i18n/client"
import { Locale } from "@/src/app/i18n/settings"
import { m, useInView } from "framer-motion"
import { useRef } from "react"

export default function SectionProjects({ lang }: { lang: Locale }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const tSectionProjects = useTranslation(lang, "SectionProjects")?.t

  return (
    <m.section
      id="projects"
      ref={ref}
      className="card mb-8 min-h-screen will-change-[transform,opacity] xl:mb-2"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      SectionProjects
    </m.section>
  )
}
