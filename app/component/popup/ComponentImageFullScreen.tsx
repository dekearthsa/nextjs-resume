import Image from "next/image"
import React from "react";

interface ComponentImageFullScreenProps {
    imgPath: string; 
}

const ComponentImageFullScreen: React.FC<ComponentImageFullScreenProps> = ({imgPath}) => {
    const pathImage = imgPath
    return (
        <div className=" m-auto flex justify-center">
            <Image
                src={pathImage}
                alt="Company Logo"
                width={1000} // Desired width
                height={600} // Desired height
                objectFit="cover"
            />
        </div>
    )
}

export default ComponentImageFullScreen