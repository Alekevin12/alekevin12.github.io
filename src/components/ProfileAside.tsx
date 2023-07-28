import { WithTranslation } from "react-i18next";
import { Locale } from "@/src/app/i18n/settings";
import profileImage from "@/src/assets/profile.jpg"
import Image from "next/image";

export default function ProfileAside({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <aside className="card mb-8 p-6 xl:mb-2 xl:me-4 w-full h-fit xl:w-1/4 xl:sticky xl:top-4 md:px-12 md:py-8 flex flex-col items-center">
      <h1 className="text-4xl mb-4">Alessandro Richetto</h1>
      <Image className="rounded-xl max-w-[250px] w-full mb-4 grayscale" src={profileImage} alt={t('ProfileImageAlt')} priority={true} />
      <h5 className="text-sm">Full Stack Developer</h5>
    </aside>
  )
}
