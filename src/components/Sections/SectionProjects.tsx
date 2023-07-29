"use client"

import { useTranslation } from "@/src/app/i18n/client"
import { Locale } from "@/src/app/i18n/settings"
import { m, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionBadge } from "./SectionBadge"
import { FolderGit2 } from "lucide-react"

export default function SectionProjects({ lang }: { lang: Locale }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const tSectionProjects = useTranslation(lang, "SectionProjects")?.t

  return (
    <>
      <SectionBadge id="projectsBadge" className="mt-2">
        <SectionBadge.Icon>
          <FolderGit2 height={12} width={12} className="mr-1"/> 
        </SectionBadge.Icon>
        <SectionBadge.Text>
          {tSectionProjects("Title")}
        </SectionBadge.Text>
      </SectionBadge>
      <m.section
        id="projects"
        ref={ref}
        className="card mb-8 min-h-screen will-change-[translate,opacity] transition-theme-and-fade xl:mb-2"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          // transition: "translate, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s, "
          // transitionProperty: '',
          // transitionDuration: '',
          // transitionDelay: '',
          // transitionTimingFunction: '',
        }}
      >
        SectionProjects
      </m.section>
    </>
  )
}
