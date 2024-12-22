'use client';
import { useState } from 'react';

export default function MorphingLogo() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-8 h-8 focus:outline-none hover:opacity-80 focus:ring-2 focus:ring-gray-400 rounded"
            aria-label="Toggle logo"
        >
            <svg 
                viewBox="0 0 24 24" 
                className="w-full h-full"
            >
                <path
                    d={isHovered 
                        ? "M12 3L4 21h16L12 3zm0 6l4.5 10h-9L12 9z"  // Triangle with inner triangle
                        : "M9 4h6v2h-2v12h2v2H9v-2h2V6H9V4z"        // Letter "I"
                    }
                    className="fill-gray-700"
                    style={{
                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformOrigin: 'center',
                        transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </svg>
        </button>
    );
}