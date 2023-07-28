'use client';

import { useTranslation } from "@/src/app/i18n/client";
import { Locale } from "@/src/app/i18n/settings";
import { m } from "framer-motion";
import { WithTranslation } from "react-i18next";

export default function SectionIntro({lang}: {lang: Locale}) {
  const tSectionIntro = useTranslation(lang, 'SectionIntro')?.t;
  return (
    <m.section id="intro" className="mb-8 min-h-screen card xl:mb-2">
      SectionIntro
    </m.section>
  )
}
