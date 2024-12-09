import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
    images: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number; // in milliseconds
}

const Slideshow: React.FC<SlideshowProps> = ({
    images,
    autoPlay = false,
    autoPlayInterval = 5000,
}) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(true);

    useEffect(() => {
        if(isAnimating){
            const intervalFunc =  setInterval(() => {
                haddleNextAuto();
            }, autoPlayInterval);
            if(!isAnimating){
                clearTimeout(intervalFunc)
            }
        }
    }, [autoPlay, autoPlayInterval, currentIndex]);

    const haddleNextAuto = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    const handlePrev = () => {
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <div className="">
      {/* Slides */}
        <div className="overflow-hidden rounded-lg">
            {images.map((src, index) => (
        <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentIndex
                ? 'translate-x-0'
                : index > currentIndex
                ? 'translate-x-full'
                : '-translate-x-full'
            }`}
        >
            <Image
                width={1200}
                height={700}
                src={src}
                className="block w-full h-full  object-scale-down"
                alt={`Slide ${index + 1}`}
            />
        </div>
        ))}
    </div>

      {/* Pagination Indicators */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
            <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-current={index === currentIndex}
                aria-label={`Slide ${index + 1}`}
            ></button>
            ))
        }
    </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slideshow;
