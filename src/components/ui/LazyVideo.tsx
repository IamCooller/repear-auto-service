'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
}

const LazyVideo = ({ desktopSrc, mobileSrc, className }: LazyVideoProps) => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newSrc = isMobile ? mobileSrc : desktopSrc;
    setLoading(true);

    if (videoRef.current) {
      videoRef.current.src = newSrc;
      videoRef.current.load();
    }
  }, [isMobile, desktopSrc, mobileSrc]);

  const handleVideoLoaded = () => {
    setLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error playing video:', error);
        }
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        onCanPlay={handleVideoLoaded}
        className="w-full h-full"
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default React.memo(LazyVideo);
