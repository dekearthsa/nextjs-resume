'use client';

import ComponentHeader from "../../component/ComponentHeader";
import { useEffect } from "react";

const ViewProfilePage = () => {
    
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
    },[])


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
                </div>
                
                <div className="fade-ins-2 opacity-0 translate-y-[-2.5rem] duration-200 ">
                    <div className="set-up-grid mt-10">
                        <div className="">
                            <div>EDUCATION:</div>
                        </div>
                        <div>
                            <div>Master's degree Data sci Chiang Mai University</div>
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
                        <div className="grid grid-cols-4">
                            <div>JavaScript</div>
                            <div>TypeScript</div>
                            <div>Python</div>
                            <div>Php</div>
                            <div>Dart</div>
                            <div>Flutter</div>
                            <div>Flask</div>
                            <div>Next.js</div>
                            <div>Vue.js</div>
                            <div>Laravel</div>
                            <div>React</div>
                            <div>Tailwind css</div>
                            <div>Docker</div>
                            <div>Mysql</div>
                            <div>sql server</div>
                            <div>Mongodb</div>
                            <div>AWS Lambda</div>
                            <div>AWS greengrass</div>
                            <div>AWS API gateway</div>
                            <div>AWS dynamodb</div>
                            <div>AWS apprunner</div>
                            <div>AWS Amplify</div>
                            <div>AWS SQS</div>
                            <div>AWS EventBridge</div>
                            <div>AWS Container Registry</div>
                            <div>AWS IoT Core</div>
                            <div>AWS S3</div>
                            <div>GCP cloud run</div>
                            <div>GCP Datastore</div>
                            <div>GCP function</div>
                            <div>GCP storage</div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        </div>
        
    )
}

export default ViewProfilePage