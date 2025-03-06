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

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
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
        <MagicEffect/>
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
    </div>
  );
}