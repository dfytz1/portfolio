import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-white`}>
        <main className="flex flex-col md:flex-row min-h-screen">
          <Navigation className="w-full md:w-[300px] md:min-h-screen" />
          <div className="flex-1 w-full flex justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
