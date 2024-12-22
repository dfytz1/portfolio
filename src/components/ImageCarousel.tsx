'use client';
import { useState } from 'react';

interface ImageCarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            nextImage();
        } else {
            previousImage();
        }
    };

    return (
        <div 
            className="relative" 
            onWheel={handleWheel}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Navigation Arrows */}
            <button 
                onClick={previousImage}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center transition-opacity duration-200 ${
                    isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Previous image"
            >
                <div className="w-0 h-0 border-y-[8px] border-y-transparent border-r-[12px] border-r-gray-500" />
            </button>
            <button 
                onClick={nextImage}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center transition-opacity duration-200 ${
                    isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Next image"
            >
                <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-gray-500" />
            </button>

            {/* Image Container */}
            <div className="aspect-video bg-transparent rounded-lg overflow-hidden">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Image Counter */}
            <div className={`absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm transition-opacity duration-200 ${
                isHovering ? 'opacity-100' : 'opacity-0'
            }`}>
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
} 