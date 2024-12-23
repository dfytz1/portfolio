import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import useSound from 'use-sound';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preload" as="audio" href="/hover.mp3" type="audio/mpeg" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <main className="flex flex-col md:flex-row min-h-screen">
          <Navigation className="w-full md:w-[300px] md:min-h-screen" />
          <div className="flex-1 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
