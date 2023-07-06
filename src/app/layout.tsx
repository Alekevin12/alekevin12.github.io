import NavigationAside from '../components/NavigationAside'
import ProfileAside from '../components/ProfileAside'
import ThemeToggle from '../components/ThemeToggle';
import Providers from '../components/providers'
import '../styles/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alekevin12 | Home',
  description: 'Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} relative`}>
        <Providers>
          <ThemeToggle />
          <main className='flex flex-col xl:flex-row container p-2 mx-auto'>
            <ProfileAside />
            {children}
            <NavigationAside />
          </main>
        </Providers>
      </body>
    </html>
  )
}
