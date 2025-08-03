import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

import { Josefin_Sans } from 'next/font/google';
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Luxury Cabins',
    default: 'Luxury Cabins',
  },
  description: 'A beautiful place to relax and enjoy nature',
  favicon: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefinSans.className}`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
