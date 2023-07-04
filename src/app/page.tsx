import SectionAbout from "../components/sections/SectionAbout";
import SectionContact from "../components/sections/SectionContact";
import SectionIntro from "../components/sections/SectionIntro";
import SectionProjects from "../components/sections/SectionProjects";
import SectionSkills from "../components/sections/SectionSkills";

export default function Home() {
  return (
    <section className="flex flex-col w-full">
      <SectionIntro />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
    </section>
  )
}