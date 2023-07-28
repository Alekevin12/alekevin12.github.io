"use client"

import { m } from "framer-motion"
// import {
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar"

const SkillCard = ({
  children,
  translateX = 0,
  translateY = 0,
  variant = 'standard',
}: {
  children: React.ReactNode;
  translateX?: number;
  translateY?: number;
  variant?: 'standard' | 'inline';
}) => {
  const variants = {
    initial: {
      opacity: 0,
      transform: `translateX(${translateX}px) translateY(${translateY}px)`,
    },
    visible: {
      opacity: 1,
      transform: "translateX(0) translateY(0)",
    },
  }

  return (
    <m.div
      className={`!h-full c-skillcard__${variant}`}
      viewport={{ once: true }}
      initial={variants.initial}
      whileInView={variants.visible}
    >
      {children}
    </m.div>
  )
}

// const SkillCardProgressIcon = ({
//   children,
//   skillLevel = 0,
// }: {
//   children: React.ReactNode
//   skillLevel: number
// }) => {
//   return (
//     <CircularProgressbarWithChildren
//       value={skillLevel}
//       strokeWidth={8}
//       styles={buildStyles({
//         pathColor: "rgb(20 191 109)",
//         trailColor: "rgb(107 114 128)",
//       })}
//       className="mr-8 h-24"
//     >
//       {children}
//       {skillLevel}%
//     </CircularProgressbarWithChildren>
//   )
// }

const SkillCardIcon = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="mr-4">
      {children}
    </div>
  )
}

const SkillCardText = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <span>
      {children}
    </span>
  )
}

// SkillCard.ProgressIcon = SkillCardProgressIcon;
SkillCard.Icon = SkillCardIcon;
SkillCard.Text = SkillCardText;

export { SkillCard }
