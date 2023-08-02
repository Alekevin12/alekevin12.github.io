import { Locale, i18n } from "../app/i18n/settings";
import Image from "next/image";

export function LanguageToggle({ lang }: { lang: Locale}) {
  return (
    <>
      <a href={lang} className="mx-1">
        <Image height={24} src={i18n.flags[lang]} alt={lang} />
      </a>
    </>
  )
}