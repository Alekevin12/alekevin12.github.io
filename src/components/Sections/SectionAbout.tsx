"use client";

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
      <SectionBadge id="aboutBadge">
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
        className=" mb-12 will-change-[translate,opacity] transition-theme-and-fade"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP1") }}></p>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP2") }}></p>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP3") }}></p>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP4") }}></p>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP5") }}></p>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: tSectionAbout("DescriptionP6") }}></p>

        <p className="text-dark-accent underline decoration-dark-accent underline-offset-4 mb-2">
          {tSectionAbout("DescriptionP7")}
        </p>
      </m.section>
    </>
  )
}
