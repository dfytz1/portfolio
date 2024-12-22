'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ImageType {
    src: string;
    alt: string;
}

interface Props {
    images: ImageType[];
}

export default function ImageCarousel({ images }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative group">
            <div className="relative w-full h-full">
                <Image 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt}
                    width={1000}
                    height={1000}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',  // This ensures the image maintains its aspect ratio
                        maxHeight: '600px'     // Adjust this value as needed
                    }}
                    quality={100}
                    priority={currentIndex === 0}
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
            >
                ←
            </button>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
            >
                →
            </button>
        </div>
    );
} 