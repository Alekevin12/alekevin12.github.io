"use client"

import { useTranslation } from "@/src/app/i18n/client"
import { Locale } from "@/src/app/i18n/settings"
import { m, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionBadge } from "./SectionBadge"
import { User2 } from "lucide-react"

export default function SectionAbout({ lang }: { lang: Locale }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const tSectionAbout = useTranslation(lang, "SectionAbout")?.t

  return (
    <>
      <SectionBadge>
        <SectionBadge.Icon>
          <User2  height={12} width={12} className="mr-1"/> 
        </SectionBadge.Icon>
        <SectionBadge.Text>
          {tSectionAbout("Title")}
        </SectionBadge.Text>
      </SectionBadge>
      <m.section
        id="about"
        ref={ref}
        className="card mb-8 min-h-screen will-change-[transform,opacity] xl:mb-2"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {tSectionAbout("TEST")}
      </m.section>
    </>
  )
}
