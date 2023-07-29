import { useTranslation } from "@/src/app/i18n";
import { Locale } from "@/src/app/i18n/settings";
import { Footer } from "@/src/components/Footer";
import SectionAbout from "@/src/components/Sections/SectionAbout";
import SectionIntro from "@/src/components/Sections/SectionIntro";
import SectionProjects from "@/src/components/Sections/SectionProjects";
import SectionSkills from "@/src/components/Sections/SectionSkills";


export default async function Page({
  params: { lang: locale }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <article className="flex flex-col w-full xl:px-12 md:p-4">
        <SectionIntro lang={locale} />
        <SectionAbout lang={locale} />
        <SectionSkills lang={locale} />
        <SectionProjects lang={locale} />
      </article>
    </>
  )
}