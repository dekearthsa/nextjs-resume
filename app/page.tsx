"use client";
import { useEffect, useState } from "react";
import ComponentHeader from "./component/ComponentHeader";
import MagicEffect from "./component/effect/ComponentEffect";

export default function Home() {
  const arrayTitle = [
    "Welcome to my resume profile.",
    "Power by Next.js"
  ];
  
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setGradientPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loopNum % arrayTitle.length;
      const fullText = arrayTitle[currentIndex];

      setText(prev => {
        const updatedText = isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1);
        return updatedText;
      });

      // Adjust typing speed for deleting vs typing
      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, arrayTitle]);

  return (
    <div>
        <ComponentHeader/>
        <div className="z-[1] absolute  bg-black text-white   top-0 left-0">
              <div
                className="fixed inset-0"
                style={{
                  background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, transparent, #000 30%)`,
                }}
              ></div>
            </div>
        <img
          src="https://images.steamusercontent.com/ugc/4040836197670231/1EF904621DB29AA3A902F7AE31F4FBA8A9B19842/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="fixed w-full z-[2]  mt-[350px] md:mt-[200px]">
          <div className="font-mono">
            <div className=" flex justify-center items-center">
              <div className="typewriter-container ">
                <h1 className="text-lg md:text-2xl  border-r-4 border-orange-500 pr-2 mr-10">
                &nbsp; {text}
                </h1>
              </div>
            </div>
          <div className="flex justify-center mt-[100px]">
            <a
              href="/resume.pdf"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              target="_blank"  
              rel="noopener noreferrer" 
            >
              Download resume
            </a>
          </div>
        </div>
        
      </div>
          {/* <MagicEffect/> */}

          
    </div>
  );
}