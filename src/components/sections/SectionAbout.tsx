import { useTranslation } from "@/src/app/i18n"
import { Locale } from "@/src/app/i18n/settings"
import { WithTranslation } from "react-i18next"

export default async function SectionAbout({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <section id="about" style={{height: '600px'}} className="mt-8 min-h-screen card xl:mt-2">
      { t('TEST') }
    </section>
  )
}
