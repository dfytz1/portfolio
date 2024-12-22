'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface Props {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
}

export default function BeforeAfterSlider({ 
    beforeImage, 
    afterImage, 
    beforeAlt = "Before image",
    afterAlt = "After image"
}: Props) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const position = ((clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden cursor-col-resize"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={afterAlt}
                    fill
                    style={{ 
                        objectFit: 'cover',
                        imageRendering: 'crisp-edges'  // Helps with line preservation
                    }}
                    quality={100}
                    priority  // Ensures immediate loading at full quality
                    sizes="(max-width: 1200px) 100vw, 1200px"  // Helps with resolution
                />
            </div>

            {/* Before Image (Foreground) */}
            <div 
                className="absolute inset-0"
                style={{ 
                    width: `${sliderPosition}%`,
                    overflow: 'hidden',
                }}
            >
                <div className="absolute inset-0" style={{ width: `${100 / (sliderPosition/100)}%` }}>
                    <Image
                        src={beforeImage}
                        alt={beforeAlt}
                        fill
                        style={{ 
                            objectFit: 'cover',
                            imageRendering: 'crisp-edges'
                        }}
                        quality={100}
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            </div>

            {/* Slider Line */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
                style={{ 
                    left: `${sliderPosition}%`,
                    transform: 'translateX(-50%)'
                }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="text-gray-600 text-xs">↔</div>
                </div>
            </div>
        </div>
    );
} 