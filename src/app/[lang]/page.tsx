import SectionAbout from "@/src/components/Sections/SectionAbout";
import SectionContact from "@/src/components/Sections/SectionContact";
import SectionIntro from "@/src/components/Sections/SectionIntro";
import SectionProjects from "@/src/components/Sections/SectionProjects";
import SectionSkills from "@/src/components/Sections/SectionSkills";
import { Locale, i18n } from "@/src/app/i18n/settings";
import { useTranslation } from "@/src/app/i18n";
import { GetStaticPaths } from "next";


export default async function Page({
  params: { lang: locale }
}: {
  params: { lang: Locale }
}) {
  const tSectionIntro = (await useTranslation(locale, 'SectionIntro'))?.t;
  const tSectionAbout = (await useTranslation(locale, 'SectionAbout'))?.t;
  const tSectionSkills = (await useTranslation(locale, 'SectionSkills'))?.t;
  const tSectionProjects = (await useTranslation(locale, 'SectionProjects'))?.t;
  const tSectionContact = (await useTranslation(locale, 'SectionContact'))?.t;

  return (
    <article className="flex flex-col w-full">
      <SectionIntro lang={locale} t={tSectionIntro} />
      <SectionAbout lang={locale} t={tSectionAbout} />
      <SectionSkills lang={locale} t={tSectionSkills} />
      <SectionProjects lang={locale} t={tSectionProjects} />
      <SectionContact lang={locale} t={tSectionContact} />
    </article>
  )
}