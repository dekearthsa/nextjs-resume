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

    return (
        <motion.div
            className="h-full w-full rounded-lg bg-cover bg-center relative flex flex-col"
            style={{ backgroundImage: `url(${imagePath})` }}
        >   
                {
                    (types === "code") && (
                        <div className=" flex flex-col h-full p-5">
                            <motion.div 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {title} 
                            </motion.div>
                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Framework</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Protocal</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
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
                            <motion.div 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Framework</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
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
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Database Models</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
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
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div     
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Web Server Software</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
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
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Web Server Software</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
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
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} 
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Cloud Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
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
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }} 
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>
                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }} 
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Containerization Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }} 
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
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-[30px] font-bold text-left ml-5 pt-5">
                                {title} 
                            </motion.div>
                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-[24px] font-bold text-left ml-5 border-b-[1px] border-white">Experience</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-3 text-[20px] font-bold text-left ml-5 mb-5">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                        </div>
                    )
                } 
        </motion.div>
    );
}

export default ComponentCardDetail;
