'use client';

import { useTranslation } from "@/src/app/i18n/client";
import { Locale } from "@/src/app/i18n/settings";
import { m } from "framer-motion";
import { User2 } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

export default function SectionIntro({lang}: {lang: Locale}) {
  const tSectionIntro = useTranslation(lang, 'SectionIntro')?.t;
  return (
    <>
      <SectionBadge id="introBadge" className="mt-2">
        <SectionBadge.Icon>
          <User2  height={12} width={12} className="mr-1"/> 
        </SectionBadge.Icon>
        <SectionBadge.Text>
          {tSectionIntro("Title")}
        </SectionBadge.Text>
      </SectionBadge>
      <m.section id="intro" className="my-12 xl:pr-12">
        <h2 className="text-3xl md:text-5xl xl:text-7xl"> {tSectionIntro('IntroFirstLine')} <span className="text-dark-accent">Alessandro</span></h2>
        <h3 className="text-xl md:text-3xl xl:text-5xl mb-6">{tSectionIntro('IntroSecondLine')}</h3>
        <p className="text-muted mb-16" dangerouslySetInnerHTML={{ __html: tSectionIntro('SmallDescriptionAboutMe') || '' }} />
        <div className="flex flex-col">
          <span className="text-dark-accent text-2xl md:text-4xl xl:text-6xl mb-2">
            5+
          </span>
          <span className="text-muted">
            {tSectionIntro('Experience')}
          </span>
        </div>
      </m.section>
    </>
  )
}
