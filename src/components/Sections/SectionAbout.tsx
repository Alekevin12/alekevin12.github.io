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
        {tSectionAbout("DescriptionP1")} <br /><br />
        {tSectionAbout("DescriptionP2")} <br /><br />
        {tSectionAbout("DescriptionP3")} <br /><br />
        {tSectionAbout("DescriptionP4")} <br /><br />
        {tSectionAbout("DescriptionP5")} <br /><br />
        {tSectionAbout("DescriptionP6")} <br /><br />
        {tSectionAbout("DescriptionP7")} <br /><br />
      </m.section>
    </>
  )
}
