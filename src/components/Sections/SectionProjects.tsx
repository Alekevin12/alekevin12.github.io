"use client";

import { useTranslation } from "@/src/app/i18n/client"
import { Locale } from "@/src/app/i18n/settings"
import { m, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionBadge } from "./SectionBadge"
import { FolderGit2 } from "lucide-react"
import { register } from 'swiper/element/bundle';
import Image from "next/image";

import AvanzersLogin from "@/src/assets/Projects/Avanzers/Login.jpg";
import AvanzersIncoming from "@/src/assets/Projects/Avanzers/Incoming.jpg";
import AvanzersDashboard from "@/src/assets/Projects/Avanzers/Dashboard.jpg";
import FsLightbox from "fslightbox-react";

register();

export default function SectionProjects({ lang }: { lang: Locale }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const tSectionProjects = useTranslation(lang, "SectionProjects")?.t
  const [avanzersLightboxCtrl, setAvanzersLightboxCtrl] = useState({
		toggler: false,
		slide: 1
	});

  const openLightboxAtSlide = (ctrl: typeof avanzersLightboxCtrl, setCtrl: typeof setAvanzersLightboxCtrl, slide: number) => {
    setCtrl({
      toggler: !ctrl.toggler,
      slide: slide,
    })
  }


  return (
    <>
      <SectionBadge id="projectsBadge" className="mt-2">
        <SectionBadge.Icon>
          <FolderGit2 height={12} width={12} className="mr-1"/> 
        </SectionBadge.Icon>
        <SectionBadge.Text>
          {tSectionProjects("Title")}
        </SectionBadge.Text>
      </SectionBadge>
      <m.section
        id="projects"
        ref={ref}
        className="mb-8 min-h-screen will-change-[translate,opacity] transition-theme-and-fade xl:mb-2"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          // transition: "translate, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s, "
          // transitionProperty: '',
          // transitionDuration: '',
          // transitionDelay: '',
          // transitionTimingFunction: '',
        }}
      >
        <section className="card w-full p-4 md:p-4">
          <div className="w-64">
            <swiper-container className="w-full bg-inherit">
              <swiper-slide>
                <a onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 1) }>
                  <Image height={300} alt="" src={AvanzersLogin} />
                </a>
              </swiper-slide>
              <swiper-slide>
                <a onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 2) }>
                  <Image height={300} alt="" src={AvanzersDashboard} />
                </a>
              </swiper-slide>
              <swiper-slide>
                <a onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 3) }>
                  <Image height={300} alt="" src={AvanzersIncoming} />
                </a>
              </swiper-slide>
            </swiper-container>
          </div>
        </section>
      </m.section>
      <FsLightbox
        toggler={avanzersLightboxCtrl.toggler}
        sources={[
          AvanzersLogin.src,
          AvanzersDashboard.src,
          AvanzersIncoming.src,
        ]}
        slide={avanzersLightboxCtrl.slide}
      />
    </>
  )
}
