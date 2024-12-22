import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});
const robotoMono = Roboto_Mono({ 
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="audio" href="/hover.mp3" type="audio/mpeg" />
      </head>
      <body className={`${inter.className} bg-white text-gray-700`}>
        <div className="flex min-h-screen">
          <Navigation className={robotoMono.className} />
          <main className="flex-1 p-8 flex justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
