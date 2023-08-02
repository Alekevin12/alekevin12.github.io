import en from '@/src/assets/Flags/en.svg';
import it from '@/src/assets/Flags/it.svg';
import fr from '@/src/assets/Flags/fr.svg';
import de from '@/src/assets/Flags/de.svg';
import es from '@/src/assets/Flags/es.svg';

export const i18n = {
  locales: ['en', 'it', 'fr',  'de', 'es'],
  flags: {
    en,
    it,
    fr,
    de,
    es,
  },
  defaultLocale: 'en',
  defaultNS: 'en',
} as const

export type Locale = (typeof i18n)['locales'][number];

export function getOptions(lng: Locale = i18n.defaultLocale, ns: string = i18n.defaultNS) {
  return {
    // debug: true,
    supportedLngs: i18n.locales,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: i18n.defaultNS,
    defaultNS: i18n.defaultNS,
    ns
  }
}