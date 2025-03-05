'use client';

import ComponentHeader from "../../component/ComponentHeader";
import {CardData} from "../../types/index"
import { useState,useEffect } from "react";

const ViewProfilePage = () => {

    const [hover, setHover] = useState(999);
    const [btnName, setBtnName] = useState("Show More");
    const [showCard, setShowCard] = useState<CardData[]>([]);

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
            title:"JS/TS",
            imagePath: "https://www.mindphp.com/images/2022/07/jsts_1.png",
            jobs: ["express.js","fastiy.js","Next.js+tailwind","React.js+tailwind","Vue3.js+tailwind"],
            protocal: ["http","wss","mqtt"],
            types: "code"
        },
        {
            title:"Python",
            imagePath: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?w=1600&ssl=1",
            jobs: ["FaskAPI","Kivy","tensorflow","DataSCI-tools"],
            protocal: ["http","mqtt"],
            types: "code"
        },
        {
            title:"Dart",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg",
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
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
            jobs: ["Unity C#"],
            protocal: ["GAME"],
            types: "web-server"
        },
        {
            title:"C++",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
            protocal: ["http","mqtt"],
            jobs: ["ESP32 NodeMCU"],
            types: "code"
        },
        {
            title:"Database",
            imagePath: "https://thumbs.dreamstime.com/b/database-icon-logo-modern-line-style-high-quality-black-outline-pictogram-web-site-design-mobile-apps-vector-80594008.jpg?w=768",
            protocal: ["NoSql","SQL"],
            jobs: ["MongoDB", "MySQL", "SQL server", "dynamodb", "datastore", "firestore"],
            types: "database"
        },
        {
            title:"WebServer",
            imagePath: "https://as2.ftcdn.net/jpg/04/78/14/45/1000_F_478144585_wkOBc5k44OwpiJS544O6iDsbjbkdTtQK.webp",
            protocal: ["Nginx"],
            jobs: ["load balancer", "Install SSL", "Install Domain"],
            types: "code"
        },
        {
            title:"OS",
            imagePath: "https://logopond.com/logos/764befce2161b53b5895108e1e8597d7.png",
            protocal: ["Linux"],
            jobs: ["systemd", "cronjob"],
            types: "os"
        },
        {
            title:"Cloud",
            imagePath: "https://as2.ftcdn.net/jpg/02/37/31/47/1000_F_237314729_632u9ZX7QXmPTcSXCcAmxDnvkyPwWoRS.webp",
            protocal: ["Google cloud","AWS"],
            jobs: ["AWS Lambda","WS greengrass", "AWS API gateway", 
                "AWS dynamodb", "AWS apprunner", "WS Amplify", "AWS SQS", 
                "AWS EventBridge","AWS Container Registry", "AWS IoT Core", 
                "AWS S3", "GCP cloud run", "GCP Datastore","GCP function", "GCP storage"],
            types: "cloud"
        },{
            title:"Container",
            imagePath: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2019/06/c454d054.png?q=50&fit=crop&w=767&h=&dpr=1.5",
            protocal: ["Docker"],
            jobs: ["Docker", "Docker compose"],
            types: "container"
        },
        {
            title: "Other tools",
            imagePath: "https://as1.ftcdn.net/v2/jpg/02/58/92/94/1000_F_258929407_AHya3I8JQJvFEDrucAI3173HVp8CP59P.jpg",
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
                            <div>PAGE:</div>
                        </div>
                        <div>
                            <div>https://www.tiktok.com/@coding.aroi</div>
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
                                    <div key={idx} className={`card-con fade-ins-4 opacity-0 translate-y-[-2.5rem] duration-500`} >
                                        <button
                                            className={`mt-10 relative w-60 h-[300px] bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ${
                                                hover === idx ? "scale-105 rotate-3" : "scale-100"
                                            }`}
                                            onMouseEnter={() => setHover(idx)}
                                            onMouseLeave={() => setHover(999)}
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