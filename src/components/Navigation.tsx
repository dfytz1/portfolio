'use client';

import Link from 'next/link';
import SoundLink from './SoundLink';

export default function Navigation({ className = "" }) {
    return (
        <nav className={`bg-white p-4 ${className}`}>
            <div className="md:fixed md:w-[300px]">
                <Link href="/">
                    <h1 className="text-base font-mono mb-8 text-gray-700 hover:text-black cursor-pointer">
                        IG portfolio
                    </h1>
                </Link>
                <ul className="space-y-4 font-mono text-gray-700">
                    <li>
                        <SoundLink href="/">TEXTILE PANELS</SoundLink>
                    </li>
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
                        <SoundLink href="/project4">HONEYCOMB PANELS</SoundLink>
                    </li>
                    <li>
                        <SoundLink href="/about">About Me</SoundLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
} 