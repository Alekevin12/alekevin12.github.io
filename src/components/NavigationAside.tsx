"use client"

import { FolderGit2, Home, Lightbulb, Mail, User2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavigationAside() {
  const [currentHash, setCurrentHash] = useState("#")
  globalThis.onhashchange = () => {
    if (!location.hash) {
      setCurrentHash("#")
      return
    }

    setCurrentHash(location.hash)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLDivElement>("section[id]")
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = `#${section.id}`
          window.history.replaceState(null, "", sectionId)
          setCurrentHash(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <aside className="fixed right-8 top-1/2 hidden -translate-y-1/2 rounded-full border-2 border-zinc-900 p-4 dark:border-gray-500 xl:block">
      <ul className="flex list-none flex-col">
        <li className="mb-2">
          <Link href="/#" onClick={() => setCurrentHash("#")}>
            <Home
              className={
                currentHash === "#"
                  ? "text-light-accent dark:text-dark-accent"
                  : ""
              }
            />
          </Link>
        </li>
        <li className="my-2">
          <Link href="/#about" onClick={() => setCurrentHash("#about")}>
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
          <Link href="/#skills" onClick={() => setCurrentHash("#skills")}>
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
          <Link href="/#projects" onClick={() => setCurrentHash("#projects")}>
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
          <Link href="/#contact" onClick={() => setCurrentHash("#contact")}>
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
