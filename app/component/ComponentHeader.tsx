"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const ComponentHeader = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState("home");

    const navigateTo = (path: string) => {
        router.push(path);
        setMenuOpen(false);
    };

    return (
        <div className="shadow-md w-full relative top-0 z-50 text-white">
        <div className="flex justify-between items-center p-5 md:px-10">
            <button
            className="font-bold text-xl"
            onClick={() => {navigateTo("/"); setCurrentMenu("home")}}
            >
            LOGO
            </button>
            <div className="hidden md:flex space-x-10">
            <button
                className="font-bold hover:scale-110 transition duration-300"
                onClick={() => {navigateTo("/"); setCurrentMenu("home")}}
            >
                HOME
            </button>
            <button
                className="font-bold hover:scale-110 transition duration-300"
                onClick={() => {navigateTo("/view/profile");  setCurrentMenu("profile")}}
            >
                PROFILE
            </button>
            <button
                className="font-bold hover:scale-110 transition duration-300"
                onClick={() => {navigateTo("/view/project"); setCurrentMenu("project") }}
            >
                PROJECT
            </button>
            <button
                className="font-bold hover:scale-110 transition duration-300"
                onClick={() => {navigateTo("/view/contact"); setCurrentMenu("contact")}}
            >
                CONTACT
            </button>
            </div>
            <div className="md:hidden  font-bold">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <Menu size={30}/>: <Menu size={30} />}
                </button>
            </div>
        </div>
            <div
                className={`
                md:hidden fixed top-0 left-0 w-full h-screen
                bg-white text-black shadow-md
                transition-all duration-300 ease-in-out
                z-40
                ${menuOpen ? "opacity-90 translate-y-0" : "opacity-0 -translate-y-full"} 
                `}
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            >
            <div 
                className="flex justify-end translate-x-[-10px] translate-y-[10px]">
                {/* <button 
                    onClick={()=> {
                        if(currentMenu === "home"){
                            navigateTo("/")
                        }else if(currentMenu === "profile"){
                            navigateTo("/view/profile")
                        }else if(currentMenu === "project"){
                            navigateTo("/view/project")
                        }else if(currentMenu === "contact"){
                            navigateTo("/view/contact")
                        }else{
                            navigateTo("/")
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button> */}
            </div>
            <div className="flex flex-col items-center justify-center space-y-6 h-screen z-[-999]">
                <button
                    className="font-bold text-lg"
                    onClick={() => {navigateTo("/"); setCurrentMenu("home")}}
                >
                    HOME
                </button>
                <button
                    className="font-bold text-lg"
                    onClick={() => {navigateTo("/view/profile"); setCurrentMenu("profile")}}
                >
                    PROFILE
                </button>
                <button
                    className="font-bold text-lg"
                    onClick={() => {navigateTo("/view/project");  setCurrentMenu("project")}}
                >
                    PROJECT
                </button>
                <button
                    className="font-bold text-lg"
                    onClick={() => {navigateTo("/view/contact");setCurrentMenu("contact")}}
                >
                    CONTACT
                </button>
                
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 rounded-lg z-[-999]"></div>
        </div>
        </div>
    );
};

export default ComponentHeader;
