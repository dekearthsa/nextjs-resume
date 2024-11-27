// import { useState } from "react"

'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ComponentHeader = () => {
    const router = useRouter();
    const navigateTo = (path: string) => {
        router.push(path)
    }

    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });
    },[])
    return (
        <div className='fade-ins opacity-0 translate-y-[-2.5rem] duration-500 bg-gradient-to-b from-gray-800'>
            <div className="grid grid-cols-2 pt-5 pb-5 ">
                <div className="flex justify-start ml-10">
                    <button className="font-bold"
                        onClick={()=> navigateTo("/")}
                    >
                        <h1>LOGO</h1>
                    </button>
                </div>
                <div className="flex justify-around">
                    <div>
                        <button className="w-[150px] font-bold  hover:scale-125 duration-500"
                            onClick={()=> navigateTo("/")}
                        >
                            <h1>HOME</h1>
                        </button>
                    </div>
                    <div>
                        <button className="w-[150px]  font-bold  hover:scale-125 duration-500"
                            onClick={()=> navigateTo("/view/profile")}
                        >
                            <h1>PROFILE</h1>
                        </button>
                    </div>
                    <div>
                        <button className="w-[150px] font-bold  hover:scale-125   duration-500"
                            onClick={()=> navigateTo("/view/project")}
                        >
                            <h1>PROJECT</h1>
                        </button>
                    </div>
                    <div>
                        <button className="w-[150px] font-bold  hover:scale-125 duration-500"
                            onClick={()=> navigateTo("/view/contact")}
                        >
                            <h1>CONTACT</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeader