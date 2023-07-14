"use client"

import { FolderGit2, Home, Lightbulb, Mail, User2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Locale } from "@/src/app/i18n/settings"
import { useTranslation } from "@/src/app/i18n/client"

export default function NavigationAside({lang}: { lang: Locale}) {
  const [currentHash, setCurrentHash] = useState("#intro");
  const tNavigationAside = useTranslation(lang, 'NavigationAside');
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

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 16; // Default Margin
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = `#${section.id}`
            window.history.replaceState(null, "", sectionId)
            setCurrentHash(sectionId)
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
    <aside className="fixed right-8 top-1/2 hidden -translate-y-1/2 rounded-full border-2 border-zinc-900 p-4 dark:border-gray-500 xl:block">
      <ul className="flex list-none flex-col">
        <li className="mb-2">
          <Link href="/#intro" onClick={(event) => goToHash("#intro", event as any)}>
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
          <Link href="/#about" onClick={(event) => goToHash("#about", event as any)}>
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
          <Link href="/#skills" onClick={(event) => goToHash("#skills", event as any)}>
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
          <Link href="/#projects" onClick={(event) => goToHash("#projects", event as any)}>
            <FolderGit2
              className={
                currentHash === "#projects"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/#contact" onClick={(event) => goToHash("#contact", event as any)}>
            <Mail
              className={
                currentHash === "#contact"
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
