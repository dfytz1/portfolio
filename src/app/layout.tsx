import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex min-h-screen">
          <nav className="w-64 p-6 border-r border-gray-200">
            <ul className="space-y-4 font-bold text-sm">
              <li>
                <Link href="/" className="hover:text-gray-600">Project 1</Link>
              </li>
              <li>
                <Link href="/project2" className="hover:text-gray-600">Project 2</Link>
              </li>
              <li>
                <Link href="/project3" className="hover:text-gray-600">Project 3</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600">About Me</Link>
              </li>
            </ul>
          </nav>
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
