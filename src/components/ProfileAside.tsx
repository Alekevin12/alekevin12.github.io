import { WithTranslation } from "react-i18next";
import { Locale } from "@/src/app/i18n/settings";
import profileImage from "@/src/assets/profile.jpg"
import Image from "next/image";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function ProfileAside({t, lang}: {t: WithTranslation['t'], lang: Locale}) {
  return (
    <aside className="card mb-8 p-6 md:mx-12 xl:mb-2 xl:me-4 h-fit xl:w-1/4 xl:sticky xl:top-4 xl:px-12  md:py-8 flex flex-col items-center">
      <h1 className="text-4xl mb-4">Alessandro Richetto</h1>
      <Image className="rounded-xl max-w-[250px] w-full mb-4 grayscale" src={profileImage} alt={t('ProfileImageAlt')} priority={true} />
      <h5 className="text-sm text-muted mb-4">Full Stack Developer</h5>
      <h3 className="flex mb-2"> <MapPin className="mr-1" /> Catania, Italia </h3>
      <ul className="mb-4 flex">
        <li className="p-2 mr-2 rounded-full border border-gray-500 hover:border-zinc-900 hover:dark:border-white text-gray-500 hover:text-zinc-900 hover:dark:text-white transition-colors">
          <a href="mailto:alessandrokevin98@gmail.com"> <Mail /> </a> 
        </li>
        <li className="p-2 rounded-full border border-gray-500 hover:border-zinc-900 hover:dark:border-white text-gray-500 hover:text-zinc-900 hover:dark:text-white transition-colors">
          <a href="https://www.linkedin.com/in/arichetto/" target="_blank"> <Linkedin /> </a> 
        </li>
      </ul>
      <button className="bg-dark-accent rounded-2xl w-full text-2xl hover:bg-dark-success transition-theme-and-hover p-2">
        {t('GetInTouch')}
      </button>
    </aside>
  )
}
