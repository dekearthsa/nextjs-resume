'use client';

import ComponentHeader from "../../component/ComponentHeader";
import {CardData} from "../../types/index"
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComponentCardDetail from "@/app/component/popup/ComponentCardDetail";

const ViewProfilePage = () => {

    const [hover, setHover] = useState(999);
    const [btnName, setBtnName] = useState("Show More");
    const [showCard, setShowCard] = useState<CardData[]>([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [dataInPopup, setDataInPopup] =useState<CardData>({
        title: "",
        imagePath: "https://www.mindphp.com/images/2022/07/jsts_1.png",
        protocal:[],
        jobs: [],
        types: ""
    });

    useEffect(()=> {
        setShowCard(skillArray.slice(0, 4));
    },[]);
    
    useEffect(() => {
        const fadeElements = Array.from(document.querySelectorAll(`.card-con`)).slice(-4); 
        console.log(fadeElements)
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
            el.classList.add('opacity-100', 'translate-y-0');
            },index * 100); 
        });
    }, [showCard]);

    const handlerOpenCard = (data: CardData) => {
        setOpenPopup(true);
        setDataInPopup(data);
        // const sharBtn = document.querySelectorAll(`.card-btn-${data.title}`)
        // sharBtn.forEach((el, idx) => {
        //     el.classList.add("tilt-shake")
        // })
    }

    const handlerShowMore = () => {
        setShowCard((prev) => {
            const nextLoad = prev.length + 4;
            const newArray = skillArray.slice(0, nextLoad);
            
            if (newArray.length >= skillArray.length) {
                setBtnName("Show Less");
            } else {
                setBtnName("Show More");
            }
    
            return newArray;
        });
    };
    
    const skillArray: CardData[] = [
        {
            title:"JS-TS",
            imagePath: "https://www.masterborn.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6e7jqm4y92l8%2F5nzwwMXuigK9Bj1Z9zH5ZR%2F2ee18f6d393a3e814b23f30fb1c7deb3%2F210407_MB_blog_cover_TSvsJS.jpg&w=3840&q=75",
            jobs: ["Express.js","Fastiy.js","Next.js+tailwind","React.js+tailwind","Vue3.js+tailwind"],
            protocal: ["http","wss","mqtt"],
            types: "code"
        },
        {
            title:"Python",
            imagePath: "https://pbs.twimg.com/media/DxMKNT5WoAIdciw?format=jpg&name=900x900",
            jobs: ["FaskAPI","Kivy","tensorflow","DataSCI-tools"],
            protocal: ["http","mqtt"],
            types: "code"
        },
        {
            title:"Dart",
            imagePath: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcbmk9vgy1w3zr7e2wd4l.jpg",
            jobs: ["Flutter"],
            protocal: ["http","mqtt"],
            types: "code"
        },
        {
            title:"Golang",
            imagePath: "https://icehousecorp.com/wp-content/uploads/2022/04/go.png",
            jobs: ["GIN"],
            protocal: ["http"],
            types: "code"
        },
        {
            title:"JAVA",
            imagePath: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
            jobs: ["Spring boot"],
            protocal: ["http"],
            types: "code"
        },
        {
            title:"C#",
            imagePath: "https://miro.medium.com/v2/resize:fit:1340/format:webp/0*muNHqR0MMu2CjRbv.png",
            jobs: ["Unity C#"],
            protocal: ["GAME"],
            types: "game"
        },
        {
            title:"C++",
            imagePath: "https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg",
            protocal: ["http","mqtt"],
            jobs: ["ESP32 NodeMCU"],
            types: "code"
        },
        {
            title:"Database",
            imagePath: "https://velog.velcdn.com/images/raiznn/post/fcfda92d-1d9b-4210-b610-e911c66f731f/image.png",
            protocal: ["NoSql","SQL"],
            jobs: ["MongoDB", "MySQL", "SQL server", "dynamodb", "datastore", "firestore"],
            types: "database"
        },
        {
            title:"WebServer",
            imagePath: "https://osiwan.fr/wp-content/uploads/2024/02/istockphoto-1333400600-640x640-1.jpg",
            protocal: ["Nginx open source"],
            jobs: ["Load balancer", "Install SSL", "Install Domain", " Reverse proxy"],
            types: "web-server"
        },
        {
            title:"OS",
            imagePath: "https://wallpapers.com/images/featured-full/ubuntu-en1fj9a0clgfvniv.jpg",
            protocal: ["Linux"],
            jobs: ["systemd", "cronjob"],
            types: "os"
        },
        {
            title:"Cloud",
            imagePath: "https://ditc.co.th/wp-content/uploads/2021/07/1-1066x800.jpg",
            protocal: ["Google cloud","AWS", "Digital ocean"],
            jobs: ["AWS Lambda","AWS greengrass", "AWS API gateway", 
                "AWS dynamodb", "AWS apprunner", "AWS Amplify", "AWS SQS", 
                "AWS EventBridge","AWS Container Registry", "AWS IoT Core", 
                "AWS S3", "GCP cloud run", "GCP Datastore","GCP function", "GCP storage"],
            types: "cloud"
        },{
            title:"Containerization Platform",
            imagePath: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/04/075c8694.jpeg?q=50&fit=crop&w=767&h=&dpr=1.5",
            protocal: ["Docker"],
            jobs: ["Docker", "Docker compose"],
            types: "container"
        },
        {
            title: "SAAS",
            imagePath: "https://d3s3shtvds09gm.cloudfront.net/2dee2786ce465aba01318c864a632a09.jpg",
            protocal: [""],
            jobs:["Draw.io", "Excel", "Generative AI LLM (ChatGPT)"],
            types:"other"
        }
    ]

    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });


        const fadeElements_2 = document.querySelectorAll('.fade-ins-2');
        fadeElements_2.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });

        const fadeElements_3 = document.querySelectorAll('.fade-ins-3');
        fadeElements_3.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });

        const fadeElements_4 = document.querySelectorAll('.fade-ins-4');
        fadeElements_4.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-[-2.5rem]');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); 
        });
    },[]);


    return (
        <div>
            <AnimatePresence>
                {
                    openPopup && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[50]"
                            onClick={()=> setOpenPopup(false)}
                        >
                            <div  className="bg-gray-500   rounded-2xl shadow-xl text-center w-[750px] h-[500px]">
                                <ComponentCardDetail 
                                    title={dataInPopup.title}
                                    imagePath={dataInPopup.imagePath}
                                    protocal={dataInPopup.protocal}
                                    jobs={dataInPopup.jobs}
                                    types={dataInPopup.types}
                                />
                            </div>
                        </motion.div>
                    )
                }
                
            </AnimatePresence>
            <ComponentHeader/>
            <div className="mt-10 font-mono">
            <div className="text-[24px] font-bold flex justify-center">
                <h1>Profile</h1>
            </div>
            <div className="w-[1300px] m-auto mt-10">
                <div className="fade-ins opacity-0 translate-y-[-2.5rem] duration-100">
                    <div className="set-up-grid ">
                        <div className="">
                            <div>NAME:</div>
                        </div>
                        <div>
                            <div>Sorrakrit Chaiyaworrakamol</div>
                        </div>
                    </div>
                    <div className="set-up-grid">
                        <div className="">
                            <div>TEL:</div>
                        </div>
                        <div>
                            <div>092-558-3854</div>
                        </div>
                    </div>
                    <div className="set-up-grid">
                        <div className="">
                            <div>EMAIL:</div>
                        </div>
                        <div>
                            <div>pcsishun@gmail.com</div>
                        </div>
                    </div>
                    <div className="set-up-grid">
                        <div className="">
                            <div>GITHUB:</div>
                        </div>
                        <div>
                            <div>
                                <a href="https://github.com/dekearthsa" target="_blank">
                                    https://github.com/dekearthsa
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="set-up-grid">
                        <div className="">
                            <div>PAGE:</div>
                        </div>
                        <div>
                            <div>
                                <a href="https://www.tiktok.com/@coding.aroi" target="_blank">
                                    https://www.tiktok.com/@coding.aroi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="fade-ins-2 opacity-0 translate-y-[-2.5rem] duration-200 ">
                    <div className="set-up-grid mt-10">
                        <div className="">
                            <div>EDUCATION:</div>
                        </div>
                        <div>
                            <div>Master&apos;s degree Data sci Chiang Mai University</div>
                        </div>
                    </div>
                </div>
                
                <div className="fade-ins-3 opacity-0 translate-y-[-2.5rem] duration-300 ">
                    <div className="set-up-grid mt-10">
                        <div className="">
                            <div>WORK EXPERIENCE:</div>
                        </div>
                        <div>
                            <div>Nopadol panich co. ltd as MIS (07/2018 - 03/2020)</div>
                            <div>OASYS lab as Backend (03/2021 - 12/2021)</div>
                            <div>TAIagroinnovative as fullstack (12/2021 - 07/2022)</div>
                            <div>SCG Nexter Living as fullstack (07/2021 - 08/2022)</div>
                            <div>SCG Building Materials as fullstack (08/2022 - Present)</div>
                        </div>
                    </div>
                </div>
                <div className="fade-ins-4 opacity-0 translate-y-[-2.5rem] duration-500">
                    <div className="set-up-grid mt-10">
                        <div>
                            <div>SKILL</div>
                        </div>
                        <div className="grid grid-cols-4 mb-10">
                            {
                                showCard.map((data: CardData, idx) => (
                                    <div key={idx} className={` card-con fade-ins-4 opacity-0 translate-y-[-2.5rem] duration-500`} >
                                        <button
                                            className={`card-btn-${data.title} mt-10 relative w-60 h-[300px] bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ${
                                                hover === idx ? "scale-105 rotate-3" : "scale-100"
                                            }`}
                                            onMouseEnter={() => setHover(idx)}
                                            onMouseLeave={() => setHover(999)}
                                            onClick={()=> handlerOpenCard(data)}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
                                            <img src={data.imagePath} className="w-full h-full object-cover" />
                                            <div
                                                className={`absolute bottom-5 left-5 text-white text-xl font-bold transition-transform duration-500 ${
                                                    hover === idx ? "translate-y-[-20px]" : "translate-y-0"
                                                }`}
                                            >
                                                {data.title}
                                            </div>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="mb-10 text-center m-auto flex justify-center">
                        <span>________________</span>
                        <button
                            onClick={() => {
                                if (showCard.length >= skillArray.length) {
                                    setShowCard(skillArray.slice(0, 4));
                                    setBtnName("Show More");
                                } else {
                                    handlerShowMore();
                                }
                            }}
                            className="ml-5 mr-5 border-[1px] border-white p-2 rounded-xl"
                        >
                            {btnName}
                        </button>
                        <span>________________</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default ViewProfilePage