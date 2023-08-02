"use client";

import { useTranslation } from "@/src/app/i18n/client"
import { Locale } from "@/src/app/i18n/settings"
import { m, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionBadge } from "./SectionBadge"
import { FolderGit2 } from "lucide-react"
import { register } from 'swiper/element/bundle';

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
        className="mb-8 will-change-[translate,opacity] transition-theme-and-fade xl:mb-2 d-grid grid-col-1 md:grid-col-2"
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
        
        <h3 className="text-2xl md:text-3xl mb-2">{tSectionProjects('Avanzers.Title')}</h3>  
        <section className="md:w-full flex flex-col card">
          <div className="rounded-t-2xl overflow-hidden !m-0">
            <swiper-container className="bg-inherit m-auto" pagination="true" slides-per-view="1" centered-slides="true" pagination-clickable="false" observer="true" observe-slide-children="true" observe-parents="true" loop="true" autoplay="true">
              <swiper-slide>
                { /* eslint-disable-next-line @next/next/no-img-element */}
                <img className="m-0" height={300} alt={tSectionProjects('Avanzers.LoginAlt')} src={AvanzersLogin.src} onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 1) } />
              </swiper-slide>
              <swiper-slide>
                { /* eslint-disable-next-line @next/next/no-img-element */}
                <img className="m-0" height={300} alt={tSectionProjects('Avanzers.DashboardAlt')} src={AvanzersDashboard.src} onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 2) } />
              </swiper-slide>
              <swiper-slide>
                { /* eslint-disable-next-line @next/next/no-img-element */}
                <img className="m-0" height={300} alt={tSectionProjects('Avanzers.IncomingAlt')} src={AvanzersIncoming.src} onClick={() => openLightboxAtSlide(avanzersLightboxCtrl, setAvanzersLightboxCtrl, 3) } />
              </swiper-slide>
            </swiper-container>
          </div>
          <div className="p-2">
            <div className="my-2 mb-4">
              <span className="rounded-full bg-zinc-800 dark:bg-zinc-50 hover:bg-dark-accent hover:dark:bg-dark-accent transition-theme-and-hover border-zinc-50 dark:border-zinc-800 dark:text-zinc-900 border text-white hover:text-white hover:dark:text-white p-1 px-2 me-2 text-xs md:text-sm">Angular</span>
              <span className="rounded-full bg-zinc-800 dark:bg-zinc-50 hover:bg-dark-accent hover:dark:bg-dark-accent transition-theme-and-hover border-zinc-50 dark:border-zinc-800 dark:text-zinc-900 border text-white hover:text-white hover:dark:text-white p-1 px-2 me-2 text-xs md:text-sm">SASS</span>
              <span className="rounded-full bg-zinc-800 dark:bg-zinc-50 hover:bg-dark-accent hover:dark:bg-dark-accent transition-theme-and-hover border-zinc-50 dark:border-zinc-800 dark:text-zinc-900 border text-white hover:text-white hover:dark:text-white p-1 px-2 me-2 text-xs md:text-sm">PHP</span>
              <span className="rounded-full bg-zinc-800 dark:bg-zinc-50 hover:bg-dark-accent hover:dark:bg-dark-accent transition-theme-and-hover border-zinc-50 dark:border-zinc-800 dark:text-zinc-900 border text-white hover:text-white hover:dark:text-white p-1 px-2 me-2 text-xs md:text-sm">MariaDB</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: tSectionProjects('Avanzers.Description')}}></p>
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
