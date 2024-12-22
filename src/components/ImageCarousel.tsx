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
        <div className="relative" onWheel={handleWheel}>
            {/* Navigation Arrows */}
            <button 
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
                aria-label="Previous image"
            >
                ←
            </button>
            <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70"
                aria-label="Next image"
            >
                →
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
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
} 