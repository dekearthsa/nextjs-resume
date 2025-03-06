'use client';
import { CardData } from "../../types/index";
import { motion } from "framer-motion";  
import { useState } from "react";
const ComponentCardDetail: React.FC<CardData> = ({
    title,
    imagePath,
    protocal,
    jobs,
    types
}) => {

    const [showDetail, setShowDetail] = useState()

    const handlerOpenCard = (data: CardData) => {
        const sharBtn = document.querySelectorAll(`.card-btn-${data.title}`)
        sharBtn.forEach((el, idx) => {
            el.classList.add("tilt-shake")
        })
    }
    // const fadeElCard = document.querySelectorAll(".fade-card");
    // fadeElCard.forEach((el, idx) => {
    //     setTimeout(()=>{
    //         el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
    //         el.classList.add('opacity-100', 'translate-y-0');
    //     }, idx * 1000 )
    // })
    return (
        <motion.div
            className="h-full w-full rounded-lg bg-cover bg-center relative flex flex-col"
            style={{ backgroundImage: `url(${imagePath})` }}
        >   
                {
                    (types === "code") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5"
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                            >
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Framework</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Protocal</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                }   
                {
                    (types === "game") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5"
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                            >
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Framework</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                        </div>
                    )
                }   
                {
                    (types === "database") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Database Models</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                }  
                {
                    (types === "web-server") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div     
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Web Server Software</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                }  
                {
                    (types === "os") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Web Server Software</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                } 
                {
                    (types === "cloud") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Cloud Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                } 
                {
                    (types === "container") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Containerization Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for smooth effect
                                className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                } 
                {
                    (types === "other") && (
                        <div className=" flex flex-col h-full p-5">
                            {/* Title */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for smooth effect
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth effect
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} // Slide in from top
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for smooth effect
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            {/* <div className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Web Server Software</div>
                            <div className="grid grid-cols-3 text-[20px] font-bold text-left  ml-5 mb-5">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </div> */}
                        </div>
                    )
                } 

            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div> */}
        </motion.div>
    );
}

export default ComponentCardDetail;
