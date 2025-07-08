'use client';
import React from 'react';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

interface SoundLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function SoundLink({ href, children }: SoundLinkProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [canPlaySound, setCanPlaySound] = useState(false);

    useEffect(() => {
        // Set initial volume when component mounts
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
        }

        const handleInteraction = () => {
            setCanPlaySound(true);
            // Remove listeners after first interaction
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const playSound = () => {
        if (audioRef.current && canPlaySound) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                console.error('Error playing sound:', error);
            });
        }
    };

    return (
        <>
            <audio ref={audioRef} preload="auto">
                <source src="/hover.mp3" type="audio/mpeg" />
            </audio>
            <Link 
                href={href} 
                className="hover:text-gray-500"
                onMouseEnter={playSound}
            >
                {children}
            </Link>
        </>
    );
} 