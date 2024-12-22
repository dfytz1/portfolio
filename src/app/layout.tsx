import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import SoundLink from "@/components/SoundLink";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-700`}>
        <div className="flex min-h-screen">
          <nav className={`w-64 p-6 border-r border-gray-200 ${robotoMono.className}`}>
            <ul className="space-y-4 font-bold text-sm uppercase">
              <li>
                <SoundLink href="/">Project 1</SoundLink>
              </li>
              <li>
                <SoundLink href="/project2">Project 2</SoundLink>
              </li>
              <li>
                <SoundLink href="/project3">Project 3</SoundLink>
              </li>
              <li>
                <SoundLink href="/about">About Me</SoundLink>
              </li>
            </ul>
          </nav>
          <main className="flex-1 p-8 flex justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
