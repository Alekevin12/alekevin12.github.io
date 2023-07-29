"use client";

import { FolderGit2, Home, Lightbulb, Mail, User2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Locale } from "@/src/app/i18n/settings"
import { useTranslation } from "@/src/app/i18n/client"

export default function NavigationAside({lang}: { lang: Locale}) {
  const [currentHash, setCurrentHash] = useState("#intro");
  const tNavigationAside = useTranslation(lang, 'NavigationAside')?.t;
  globalThis.onhashchange = () => {
    if (!location.hash) {
      goToHash("#intro")
      return
    }

    goToHash(location.hash)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll<HTMLDivElement>("section[id]")
        const scrollPosition = window.scrollY;

        sections.forEach((section, sectionIndex) => {
          const sectionTop = sectionIndex === 0 ? 0 : section.offsetTop - 16; // Default Margin
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = `#${section.id}`
            setCurrentHash(sectionId);
            window.history.replaceState(null, "", sectionId);
          }
        })
      }, 75); // Debounce
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeoutId);
    }
  }, []);

  function goToHash(id: string, event: Event | null = null) {
    if (event) {
      event.preventDefault();
      event.cancelBubble = true;
      event.stopPropagation();
    }

    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentHash(id);
  }

  return (
    <aside className="fixed right-8 top-1/2 hidden -translate-y-1/2 rounded-full border border-zinc-900 dark:border-gray-500 p-4 xl:block">
      <ul className="flex list-none flex-col">
        <li className="mb-2">
          <Link href="/#introBadge" onClick={(event) => goToHash("#intro", event as any)} aria-label={tNavigationAside('link-intro')} title={tNavigationAside('link-intro')}>
            <Home
              className={
                currentHash === "#intro"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
        <li className="my-2">
          <Link href="/#aboutBadge" onClick={(event) => goToHash("#about", event as any)} aria-label={tNavigationAside('link-about')} title={tNavigationAside('link-about')}>
            <User2
              className={
                currentHash === "#about"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
        <li className="my-2">
          <Link href="/#skillsBadge" onClick={(event) => goToHash("#skills", event as any)} aria-label={tNavigationAside('link-skills')} title={tNavigationAside('link-skills')}>
            <Lightbulb
              className={
                currentHash === "#skills"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
        <li className="my-2">
          <Link href="/#projectsBadge" onClick={(event) => goToHash("#projects", event as any)} aria-label={tNavigationAside('link-projects')} title={tNavigationAside('link-projects')}>
            <FolderGit2
              className={
                currentHash === "#projects"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
      </ul>
    </aside>
  )
}
