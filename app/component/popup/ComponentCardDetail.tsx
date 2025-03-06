'use client';
import { CardData } from "../../types/index";
import { motion } from "framer-motion";  
const ComponentCardDetail: React.FC<CardData> = ({
    title,
    imagePath,
    protocal,
    jobs,
    types
}) => {

    return (
        <motion.div
            className="h-full w-full rounded-lg bg-cover bg-center relative flex flex-col p-4 sm:p-6 md:p-8"
            style={{ backgroundImage: `url(${imagePath})` }}
        >   
                {
                    (types === "code") && (
                        <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Framework
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4"
                        >
                            Protocol
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {protocal.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    )
                }   
                {
                    (types === "game") && (
                        <div className="flex flex-col h-full">
                            <motion.div 
                                className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                                className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1">Framework</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2">
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                        </div>
                    )
                }   
                {
                    (types === "database") && (
                        <div  className="flex flex-col h-full">
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5">
                                {title} 
                            </motion.div>

                            <div className="flex-grow"></div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1">Platform</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                                >
                                {jobs.map((el, idx) => (
                                    <div key={idx}>{el}</div>
                                ))}
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4">Database Models</motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2">
                                {protocal.map((el, idx) => (
                                        <div key={idx}>{el}</div>
                                    ))}
                            </motion.div>
                        </div>
                    )
                }  
                {
                    (types === "web-server") && (
                        <div className=" flex flex-col h-full">
                            <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Experience
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4"
                        >
                            Software
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {protocal.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                    )
                }  
                {
                    (types === "os") && (
                        <div className=" flex flex-col h-full">
                            <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Experience
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4"
                        >
                            OS
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {protocal.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                    )
                } 
                {
                    (types === "cloud") && (
                        <div className=" flex flex-col h-full">
                            <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Experience
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4"
                        >
                            Cloud Platform
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {protocal.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                    )
                } 
                {
                    (types === "container") && (
                        <div className=" flex flex-col h-full">
                            <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Experience
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1 mt-4"
                        >
                            Containerized Platform
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {protocal.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                    )
                } 
                {
                    (types === "other") && (
                        <div className=" flex flex-col h-full">
                            <div className="flex flex-col h-full">
                        <motion.div 
                            className="text-white text-lg sm:text-xl md:text-2xl font-bold text-left pt-2 sm:pt-5"
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
                            className="text-lg sm:text-xl font-bold text-left border-b border-white pb-1"
                        >
                            Experience
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-base font-bold text-left gap-2 pt-2"
                        >
                            {jobs.map((el, idx) => (
                                <div key={idx}>{el}</div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                    )
                } 
        </motion.div>
    );
}

export default ComponentCardDetail;
