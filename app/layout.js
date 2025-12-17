import { Josefin_Sans } from 'next/font/google';
import { ReservationProvider } from './_components/ReservationContext';
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';
import Header from './_components/Header';

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
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefinSans.className}
        flex flex-col relative antialiased`}
      >
        <Header />

        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
