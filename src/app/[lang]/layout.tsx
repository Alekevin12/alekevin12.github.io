'use client';

import { Locale, i18n } from '@/src/app/i18n/settings';
import NavigationAside from '@/src/components/NavigationAside';
import ProfileAside from '@/src/components/ProfileAside';
import ThemeToggle from '@/src/components/ThemeToggle';
import Providers from '@/src/components/providers';
import '@/src/styles/globals.css';
import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import { useTranslation } from '@/src/app/i18n/client';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/src/components/Footer';
import { LanguageToggle } from '@/src/components/LanguageToggle';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params: { lang: locale }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tProfileAside = (useTranslation(locale, 'ProfileAside'))?.t;

  return (
    <html lang={locale} dir={dir(locale)} className='overflow-x-hidden print:hidden'>
      <head>
        <meta name="language" content={locale} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Alessandro Richetto | Portfolio</title>
        <meta name='description' content="Alessandro Richetto's portfolio website" />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Alessandro Richetto' />
        <meta name='keywords' content='portfolio, CV, curriculum vitae, developer, web developer, fullstack developer, full-stack developer, full stack developer, open to work, angular developer, typescript developer, programming lover, front end developer, frontend developer' />
      </head>
      <body className={`${inter.className} pt-4 overflow-x-hidden`}>
        <Analytics />
        <Providers>
          <nav className='flex justify-end'>
            {i18n.locales.filter(loc => loc !== locale).map(loc => {
              return <LanguageToggle key={loc} lang={loc}/>
            })}
            <ThemeToggle lang={locale} />
          </nav>
          <main className='relative flex flex-col xl:flex-row container p-2 mx-auto'>
            <ProfileAside lang={locale} t={tProfileAside} />
            {children}
            <NavigationAside lang={locale} />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
