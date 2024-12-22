'use client';

import { usePathname } from 'next/navigation';
import SoundLink from './SoundLink';
import MorphingLogo from './MorphingLogo';

export default function Navigation({ className }: { className: string }) {
    const pathname = usePathname();

    return (
        <nav className={`${className} fixed w-64 h-screen p-8 flex flex-col`}>
            <MorphingLogo />
            <ul className="space-y-4 mt-16">
                <li>
                    <SoundLink href="/project1">UNITIZE SYSTEM</SoundLink>
                </li>
                <li>
                    <SoundLink href="/project2">STICK SYSTEM</SoundLink>
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