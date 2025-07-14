'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';

interface ImageType {
    src: string;
    alt: string;
}

interface Props {
    images?: ImageType[];
    folderPath?: string;
    imageCount?: number;
    baseAltText?: string;
}

export default function ImageCarousel({ images, folderPath, imageCount, baseAltText = "Project Image" }: Props) {
    // Auto-generate images from folder path if provided
    const autoImages = useMemo(() => {
        if (!folderPath || !imageCount) return [];
        
        return Array.from({ length: imageCount }, (_, index) => ({
            src: `${folderPath}/${index}.jpg`,
            alt: `${baseAltText} ${index}`
        }));
    }, [folderPath, imageCount, baseAltText]);

    // Use auto-generated images if available, otherwise use provided images
    const finalImages = autoImages.length > 0 ? autoImages : (images || []);
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === finalImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? finalImages.length - 1 : prevIndex - 1
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    };

    // Don't render if no images
    if (finalImages.length === 0) {
        return (
            <div className="relative h-full flex items-center justify-center bg-white">
                <p className="text-gray-500 font-mono">No images available</p>
            </div>
        );
    }

    return (
        <>
            <div className="relative group h-full flex items-center bg-white">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={openModal}>
                        <Image 
                            src={finalImages[currentIndex].src} 
                            alt={finalImages[currentIndex].alt}
                            width={1000}
                            height={1000}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                            quality={60}
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

            {/* Full Resolution Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={closeModal}
                    onKeyDown={handleModalKeyDown}
                    tabIndex={0}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
                            aria-label="Close modal"
                        >
                            ×
                        </button>

                        {/* Image */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <Image 
                                src={finalImages[currentIndex].src} 
                                alt={finalImages[currentIndex].alt}
                                width={2000}
                                height={2000}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '90vh',
                                    width: 'auto',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                                quality={100}
                            />
                        </div>

                        {/* Navigation arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
                            aria-label="Previous image"
                        >
                            ◂
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
                            aria-label="Next image"
                        >
                            ▸
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm z-10">
                            {currentIndex + 1} / {finalImages.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 