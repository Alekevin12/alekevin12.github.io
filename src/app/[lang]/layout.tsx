import { Locale, i18n } from '@/src/app/i18n/settings';
import NavigationAside from '@/src/components/NavigationAside';
import ProfileAside from '@/src/components/ProfileAside';
import ThemeToggle from '@/src/components/ThemeToggle';
import Providers from '@/src/components/providers';
import '@/src/styles/globals.css';
import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import { useTranslation } from '@/src/app/i18n';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Alekevin12 | Home',
  description: 'Homepage',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ params: { lang: locale }}))
}

export default async function RootLayout({
  children,
  params: { lang: locale }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const tProfileAside = (await useTranslation(locale, 'ProfileAside'))?.t;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${inter.className} relative`}>
        <Providers>
          <ThemeToggle lang={locale} />
          <main className='relative flex flex-col xl:flex-row container p-2 mx-auto'>
            <ProfileAside lang={locale} t={tProfileAside} />
            {children}
            <NavigationAside lang={locale} />
          </main>
        </Providers>
      </body>
    </html>
  )
}
