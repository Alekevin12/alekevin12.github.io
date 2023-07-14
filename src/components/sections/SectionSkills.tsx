import { Locale } from "@/src/app/i18n/settings";
import { WithTranslation } from "react-i18next";

export default function SectionSkills({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <section id="skills" style={{height: '600px'}} className="mt-8 min-h-screen card xl:mt-2">
      SectionSkills
    </section>
  )
}
