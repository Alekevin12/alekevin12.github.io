'use client';

import { useTranslation } from "@/src/app/i18n/client";
import { Locale } from "@/src/app/i18n/settings";
import { m } from "framer-motion";
import { WithTranslation } from "react-i18next";

export default function SectionContact({lang}: {lang: Locale}) {
  const tSectionContact = useTranslation(lang, 'SectionContact')?.t;
  return (
    <m.section id="contact" className="mb-8 min-h-screen card xl:mb-2">
      SectionContact
    </m.section>
  )
}
