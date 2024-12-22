'use client';

import { usePathname } from 'next/navigation';
import SoundLink from './SoundLink';
import MorphingLogo from './MorphingLogo';

export default function Navigation({ className }: { className: string }) {
    const pathname = usePathname();
    const isAboutPage = pathname === '/about';

    return (
        <nav className={`w-64 p-6 ${className} ${isAboutPage ? 'bg-white' : ''}`}>
            <div className="mb-8">
                <MorphingLogo />
            </div>
            <ul className="space-y-4 font-bold text-sm uppercase">
                <li>
                    <SoundLink href="/">Project 1</SoundLink>
                </li>
                <li>
                    <SoundLink href="/project2">Project 2</SoundLink>
                </li>
                <li>
                    <SoundLink href="/project3">PANELING TOOL</SoundLink>
                </li>
                <li>
                    <SoundLink href="/about">About Me</SoundLink>
                </li>
            </ul>
        </nav>
    );
} 