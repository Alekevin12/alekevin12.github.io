'use client';

import { useTranslation } from "@/src/app/i18n/client";
import { Locale } from "@/src/app/i18n/settings";
import { SkillCard } from "../Cards/SkillCard";
import 'react-circular-progressbar/dist/styles.css';
import { SkillsAnalytics, SkillsBaseKnowledge, SkillsDatabases, SkillsIDE, SkillsLanguages, SkillsLearning, SkillsOS, SkillsProjectManagement, SkillsTools } from "@/src/assets/skills";
import React from "react";
import { LucideLightbulb } from "lucide-react";

export default function SectionSkills({lang}: {lang: Locale}) {
  const tSectionSkills = useTranslation(lang, 'SectionSkills')?.t;
  return (
    <section id="skills" className="mb-8 min-h-screen xl:mb-2">
      <span className="card flex flex-row w-min p-1 pr-2 text-[10px] text-center align-middle uppercase items-center"> 
        <LucideLightbulb height={12} width={12} className="mr-1" /> {tSectionSkills('Title')} 
      </span>
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsLanguages')}</h3>
      <SkillsContainer skills={SkillsLanguages} />
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsBaseKnowledge')}</h3>
      <SkillsContainer skills={SkillsBaseKnowledge} />
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsDatabases')}</h3>
      <SkillsContainer skills={SkillsDatabases} />
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsTools')}</h3>
      <SkillsContainer skills={SkillsTools} />
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsAnalytics')}</h3>
      <SkillsContainer skills={SkillsAnalytics} />
      {/* <h3 className="text-3xl mb-2">{tSectionSkills('SkillsIDE')}</h3>
      <SkillsContainer skills={SkillsIDE} /> */}
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsProjectManagement')}</h3>
      <SkillsContainer skills={SkillsProjectManagement} />
      {/* <h3 className="text-3xl mb-2">{tSectionSkills('SkillsOS')}</h3>
      <SkillsContainer skills={SkillsOS} /> */}
      <h3 className="text-3xl mb-2">{tSectionSkills('SkillsLearning')}</h3>
      <SkillsContainer skills={SkillsLearning} />
    </section>
  )
}

function SkillsContainer({ skills }: { skills: { icon: JSX.Element, name: string, skillLevel: number | null, translateX: number, translateY: number }[] }) {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-4">
      {skills.map((skill) => {
        return (
          <>
            <SkillCard variant="inline" translateX={skill.translateX} translateY={skill.translateY}>
              <SkillCard.Icon>
                {skill.icon}
              </SkillCard.Icon>
              <SkillCard.Text>
                {skill.name}
              </SkillCard.Text>
            </SkillCard>
          </>
        )
      })}
    </div>
  )
}