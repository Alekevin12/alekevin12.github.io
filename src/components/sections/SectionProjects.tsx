import { Locale } from "@/src/app/i18n/settings";
import { WithTranslation } from "react-i18next";

export default function SectionProjects({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <section id="projects" style={{height: '600px'}} className="mt-8 min-h-screen card xl:mt-2">
      SectionProjects
    </section>
  )
}
