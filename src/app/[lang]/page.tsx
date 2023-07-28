import { useTranslation } from "@/src/app/i18n";
import { Locale } from "@/src/app/i18n/settings";
import SectionAbout from "@/src/components/Sections/SectionAbout";
import SectionContact from "@/src/components/Sections/SectionContact";
import SectionIntro from "@/src/components/Sections/SectionIntro";
import SectionProjects from "@/src/components/Sections/SectionProjects";
import SectionSkills from "@/src/components/Sections/SectionSkills";


export default async function Page({
  params: { lang: locale }
}: {
  params: { lang: Locale }
}) {
  return (
    <article className="flex flex-col w-full">
      <SectionIntro lang={locale} />
      <SectionAbout lang={locale} />
      <SectionSkills lang={locale} />
      <SectionProjects lang={locale} />
      <SectionContact lang={locale} />
    </article>
  )
}