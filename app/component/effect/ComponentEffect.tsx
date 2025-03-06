import { useState, useEffect } from "react";

export default function MagicEffect() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setGradientPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="z-[-99] absolute  bg-black text-white   top-0 left-0">
      <div
        className="fixed inset-0"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, transparent, #000 30%)`,
        }}
      ></div>
 
        <img className="object-cover" src="https://images.steamusercontent.com/ugc/4040836197670231/1EF904621DB29AA3A902F7AE31F4FBA8A9B19842/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"/>
 
    </div>
  );
}