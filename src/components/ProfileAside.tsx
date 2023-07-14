import { WithTranslation } from "react-i18next";
import { Locale } from "@/src/app/i18n/settings";

export default function ProfileAside({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <aside className="card mt-8 xl:mt-2 xl:me-4 w-full h-fit xl:w-1/4 xl:sticky xl:top-4">
      ProfileAside
    </aside>
  )
}
