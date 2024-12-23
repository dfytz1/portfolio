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
        <div className="relative group h-full flex items-center bg-white">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                    <Image 
                        src={images[currentIndex].src} 
                        alt={images[currentIndex].alt}
                        width={1000}
                        height={1000}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                        quality={100}
                        priority={currentIndex === 0}
                    />
                </div>
                
                {/* Clickable Areas */}
                <div 
                    onClick={goToPrevious}
                    className="absolute left-0 top-0 w-1/4 h-full cursor-pointer flex items-center justify-start"
                >
                    <span className="text-2xl text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity ml-4">◂</span>
                </div>
                <div 
                    onClick={goToNext}
                    className="absolute right-0 top-0 w-1/4 h-full cursor-pointer flex items-center justify-end"
                >
                    <span className="text-2xl text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity mr-4">▸</span>
                </div>
            </div>
        </div>
    );
} 