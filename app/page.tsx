"use client";
import { useEffect, useState } from "react";

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
    <div className="font-mono">
      <div className="w-full mt-[300px] flex justify-center items-center">
        <div className="typewriter-container ">
          <h1 className="text-2xl  border-r-4 border-orange-500 pr-2 mr-10">
          &nbsp; {text}
          </h1>
          
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <a
        href="/resume.pdf"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        target="_blank" // Optional: Opens the file in a new tab
        rel="noopener noreferrer" // Security best practice when using target="_blank"
      >
        Download resume
      </a>
      </div>
    </div>

  );
}