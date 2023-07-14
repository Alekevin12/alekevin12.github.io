import SectionAbout from "@/src/components/sections/SectionAbout";
import SectionContact from "@/src/components/sections/SectionContact";
import SectionIntro from "@/src/components/sections/SectionIntro";
import SectionProjects from "@/src/components/sections/SectionProjects";
import SectionSkills from "@/src/components/sections/SectionSkills";
import { Locale } from "@/src/app/i18n/settings";
import { useTranslation } from "@/src/app/i18n";

export default async function Home({
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