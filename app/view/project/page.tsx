"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
// import ComponentImageFullScreen from "../../component/popup/ComponentImageFullScreen";
import ComponentHeader from "../../component/ComponentHeader";
import Slideshow from "../../component/Slideshow"; 

interface  structArrayImagePath {
    name: string,
    arrayPath: string[],
    desc: string
}

const ViewProjectPage = () => {
    const [isPopup, setPopup] = useState<boolean>(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]); // Track selected images for slideshow
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const arrayImagePath: structArrayImagePath[] = [
        {
            name: "furesign",
            arrayPath: ["/furesign/f1.png"],
            desc: "Create landing page with vue2 framework."
        },
        {
            name: "docare",
            arrayPath: ["/docare/do1.png", "/docare/do2.png"],
            desc: "Website for admin in hospital for alert accident and send location to admin using vue3."
        },
        {
            name: "flood",
            arrayPath: ["/flood/flood.png"],
            desc: "Line bot for goverment to find water block nearest location using python flask API."
        },
        {
            name: "solar",
            arrayPath: ["/solar/s1.png"],
            desc: "Desktop app control helio stats and send command to ESP32 using Kivy framework."
        },
        {
            name: "sookyen",
            arrayPath: ["/sookyen/sk1.png"],
            desc: ""
        },
        {
            name: "tai",
            arrayPath: ["/tai/tai.png"],
            desc: ""
        },
        {
            name: "tour",
            arrayPath: ["/tour/t1.png","/tour/t2.png","/tour/t3.png"],
            desc: ""
        },
        {
            name:"wb",
            arrayPath: ["/wb/wb1.png","/wb/wb2.png","/wb/wb3.png"],
            desc: ""
        }
    ]

    const handleOpenFullImage = (images: string[]) => {
        setSelectedImages(images);
        setPopup(true);
    };

    const haddleClickState = (idx: number) => {
        setCurrentIndex(idx)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? arrayImagePath.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === arrayImagePath.length - 1 ? 0 : prevIndex + 1));
    };


    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins-project');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });
    },[])

    return (
        <div>
            {isPopup && selectedImages.length > 0 && (
                <div
                className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center'
                onClick={() => setPopup(false)}
                >
                    <div
                        className='relative bg-white w-[90%] h-full p-4 rounded-lg overflow-hidden'
                        onClick={(e) =>{ e.stopPropagation()} } // Prevent closing when clicking inside the popup
                    >
                        <Slideshow images={selectedImages} autoPlay={true} autoPlayInterval={2000} />
                    </div>
                </div>
            )}
            <ComponentHeader/>
            <div className=" flex justify-center mt-10 fade-ins-project opacity-0 translate-y-[-2.5rem] duration-500 v-[100vh] scroll-auto">
            <div className="overflow-hidden rounded-lg ">
                {arrayImagePath.map((project, idx) => (
                    <div 
                        key={idx} 
                        className={`
                            `}>
                        <div 
                            className={
                            ` absolute inset-0 transition-transform duration-700 ease-in-out
                            ${idx === currentIndex
                            ? 'translate-x-0'
                            : idx > currentIndex
                            ? 'translate-x-full'
                            :'-translate-x-full'
                            }`
                        }>
                            <div className='flex justify-center mt-6 ml-10'>
                                <h1 className='font-bold uppercase'>{`PROJECT ${project.name.toUpperCase()}`}</h1>
                            </div>
                            <button
                                className='m-auto flex justify-center mt-10'
                                onClick={() => handleOpenFullImage(project.arrayPath)}
                            >   
                                <div 
                                    className=''
                                >
                                    <Image
                                        alt={'/public/next.svg'}
                                        className='w-[1000px] h-[520px] rounded-lg object-cover'
                                        src={project.arrayPath[0]}
                                        width={1000}
                                        height={500}
                                    />
                                </div>
                            </button>
                        </div>
                        
                        
                    </div>
                ))}
                </div>
            </div>
            <div className='mt-[700px] m-auto'> 
                sdfdsf
            </div>
            <div className='w-[58%] m-auto mt-[100px] flex justify-between translate-y-[-50px]'>
                <div className='flex'>
                    <div className='mr-10'>
                        <button 
                            className='text-white'
                            onClick={handlePrev}
                            >
                                <Image
                                    src={"/left-arrow.png"}
                                    width={25}
                                    height={25}
                                    alt=''
                                />
                            </button>
                    </div>
                    <div>
                        <button 
                            className='text-white'
                            onClick={handleNext}
                            >
                                <Image
                                    src={"/right-arrow.png"}
                                    width={25}
                                    height={25}
                                    alt=''
                                />
                            </button>
                    </div>
                </div>
                <div className='flex'>
                    {
                        arrayImagePath.map((_, idx) => (
                            <div className='ml-2' key={idx}>
                                <button
                                    onClick={() => haddleClickState(idx)}
                                    className={`w-3 h-3 rounded-full
                                        ${idx === currentIndex ? 'bg-slate-700': 'bg-gray-300'}
                                        `}
                                ></button>
                            </div>
                        ))
                    }
                </div>
            </div> 
    </div>
    )
}

export default ViewProjectPage