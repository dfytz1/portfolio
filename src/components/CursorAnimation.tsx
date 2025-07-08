'use client';

import { useEffect, useState } from 'react';

export default function CursorAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.matches('a, button, [role="button"]') || 
                         target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div 
      className="fixed w-4 h-4 bg-gray-700 rounded-full pointer-events-none mix-blend-difference"
      style={{ 
        transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isHovering ? 1.5 : 1})`,
        transition: 'transform 0.05s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
        willChange: 'transform'
      }}
    />
  );
} 