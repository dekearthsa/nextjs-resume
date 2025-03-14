"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ComponentHeader from "../../component/ComponentHeader";
import { motion } from "framer-motion";
import { StructProject } from "../../types/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const ViewProjectPage = () => {
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const featureRef = useRef(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ["Concept", "Design", "Create app", "AI v.0", "AI v.1"];
  const myFaverPro = [
    "The goal of this project is to develop a data collection system for controlling 12 heliostats and utilize the collected data to train an AI model for improved automation.",
    "Phase 1: Designing the Heliostat Data Collection System (Server-Side) In this phase, the focus is on designing the server-side data collection system for heliostats while ensuring minimal or no modifications to the hardware code. The data structure consists of three key components: Image Cropping System – A module for processing image data. Manual Data Logging System – A system for user-initiated data collection. Automated Data Logging System – A system that autonomously collects heliostat data.",
    "Phase 2: Developing the Desktop Application A desktop application is developed using Python and the Kivy framework to manage and control the data collection process. Key features of this application include: Manual control of heliostats. Fine-tuning motor sensitivity (adjusting Kp, Ki, Kd, speed, step parameters). Setting the initial position of heliostats. Updating the database (MySQL) for better data organization. Implementing an auto-tracking system for 12 heliostats to automate movement and data collection.",
    "Phase 3: AI Model Training and Optimization The data collected in Phase 2 is used to train multiple AI models to compare their effectiveness. This phase also includes: Hyperparameter tuning and model fine-tuning. Data preprocessing, such as adding additional parameters, performing oversampling, and feature extraction to enhance model performance.",
    "Phase 4: Model Deployment and Automation Once the optimal model and hyperparameters are identified, the final model is retrained and deployed automatically at the end of each day using an auto-deployment system to ensure continuous updates and improvements.",
  ];

  const arrayProject: StructProject[] = [
    {
      name: "Solar thermal",
      img: "/solar/fi_s1.png",
      desc: "Create landing page with vue2 framework.",
    },
    {
      name: "Shopping tour",
      img: "/tour/t1.png",
      desc: "sdfsdfad",
    },
    {
      name: "Docare",
      img: "/docare/do1.png",
      desc: "Website for admin in hospital for alert accident and send location to admin using vue3.",
    },
    {
      name: "Flood Line support Document",
      img: "/flood/flood.png",
      desc: "Line bot for goverment to find water block nearest location using python flask API.",
    },
    {
      name: "Sookyen",
      img: "/sookyen/sk1.png",
      desc: "sdfssdffgtdfsdf",
    },
    {
      name: "Wellbreath",
      img: "/wb/wb2.png",
      desc: "asdsdfdgfhfghfgh",
    },
  ];

  // const renderDesc = () => {
  //   return (
  //     <div>
  //       <p>{arrayProject[activeIndex].desc}</p>
  //     </div>
  //   );
  // };
  // useEffect(() => {
  //   console.log(activeIndex);
  //   renderDesc();
  // }, [activeIndex]);
  // Intersection Observer for section animations (unchanged)
  useEffect(() => {
    const sections = [heroRef.current, productRef.current, featureRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="mx-auto">
      {/* Component Header */}
      <div className="shadow-2xl z-[999]">
        <ComponentHeader />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="
          text-gray-600
          opacity-0
          z-[1]
          flex
          flex-col
          items-center
          justify-center
          text-center
          min-h-screen          
          bg-gray-300
          px-4
          relative             
        "
      >
        {/* Floating Images */}
        <div className="absolute top-0 left-0">
          <Image
            ref={imageRef}
            className="
              im-1 
              w-[0px] 
              h-[0px] 
              object-cover 
              rounded-full 
              shadow-2xl 
              animate-wiggle 
              mt-[100px] 
              ml-[50px]
              sm:w-[300px]
              sm:h-[300px]
            "
            src={"/flood/flood.png"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-0 left-[60%]">
          <Image
            ref={imageRef}
            className="
              im-4
              rounded-full
              w-[0px]
              h-[0px]
              object-cover
              animate-wiggle2
              mt-[60px]
              ml-[20px]
              shadow-2xl
              sm:w-[300px]
              sm:h-[300px]
              sm:ml-[100px]
            "
            src={"/sookyen/sk1.png"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[50%] left-[50%]">
          <Image
            ref={imageRef}
            className="
              im-2
              rounded-full
              w-[0px]
              h-[0px]
              object-cover
              animate-wiggle
              mt-[60px]
              ml-[100px]
              shadow-2xl
              sm:w-[300px]
              sm:h-[300px]
              sm:ml-[250px]
            "
            src={"/docare/do1.png"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[60%] left-[5%]">
          <Image
            ref={imageRef}
            className="
              im-3
              rounded-full
              w-[0px]
              h-[0px]
              object-cover
              animate-wiggle2
              mt-[20px]
              ml-[50px]
              shadow-2xl
              z-10
              sm:w-[300px]
              sm:h-[300px]
              sm:ml-[150px]
            "
            src={"/solar/s1.png"}
            alt=""
            width={300}
            height={300}
          />
        </div>

        {/* Main Text */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 mt-[-30px]">
          Welcome to My Little Creation
        </h1>
        <p className="text-base sm:text-lg mb-6 max-w-xl">
          This is just a glimpse of what I’ve created. Click below to explore
          more!
        </p>
        <button
          className="
            px-6 
            py-3 
            rounded-full 
            bg-blue-600 
            text-white 
            hover:bg-blue-800 
            transition-all 
            z-10
            text-sm
            sm:text-base
          "
        >
          Discover My Project
        </button>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none" />
      </section>

      {/* Product Section */}
      <section
        ref={productRef}
        className="
          m-auto
          opacity-0
          flex 
          flex-col
          md:flex-row
          items-start      
          gap-8
          min-h-[50vh]
        "
      >
        {/* Left Column: Content */}
        <div className="w-full  mr-10 mt-10">
          <div>
            <div className="mb-4 sm:ml-10 ml-5 sm:h-[160px] h-[240px]">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 z-10">
                Solar thermal
              </h2>
              <p className="text-sm sm:text-base mb-6 z-10 ">
                {myFaverPro[currentStep]}
              </p>
            </div>

            {/* Steps */}
            <div>
              <div className="relative w-[90%] m-auto ml-4 sm:w-[100%] sm:ml-10  flex items-center justify-between overflow-x-auto ">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center mr-2"
                  >
                    <motion.div
                      className={`
                        w-8 h-8 sm:w-10 sm:h-10
                        flex items-center justify-center
                        mt-4 sm:mt-10
                        z-[9]
                        rounded-full
                        cursor-pointer
                        ${
                          index <= currentStep
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-500"
                        }
                      `}
                      onClick={() => setCurrentStep(index)}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: index === currentStep ? 1.2 : 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index + 1}
                    </motion.div>
                    <button
                      onClick={() => setCurrentStep(index)}
                      className="text-xs sm:text-sm mt-2 z-[999] whitespace-nowrap"
                    >
                      {step}
                    </button>
                  </div>
                ))}

                {/* Animated Progress Line */}
                <div className="absolute top-[40%] md:top-[50%] md:ml-3 ml-3 w-[92%] md:w-[97%] h-2 bg-gray-300 ">
                  <motion.div
                    className="h-2 bg-blue-500"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(currentStep / (steps.length - 1)) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="">
          <div className="">
            <img src="/solar/fi_s1.png" alt="" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-40 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section
        ref={featureRef}
        className="
          opacity-0
          py-16
          px-4
          text-center
          bg-gray-300
          relative
        "
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 z-[999] text-white">
          Another Project
        </h2>
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-8
            justify-center
            items-start
            md:items-center
            w-full
          "
        >
          {/* Swiper Container */}
          <div className="ml-5 mr-0 md:ml-10 md:mr-10  w-[70%] md:w-[40%]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-full max-w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {arrayProject.map((el: StructProject, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="
                      flex
                      justify-center
                      items-center
                      min-h-[350px]
                      w-full
                    "
                    style={{
                      backgroundImage: `url(${el.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="z-10 text-white text-xl font-semibold">
                      {el.name}
                    </p>
                    <div className="absolute  inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Description */}
          <div
            className="
              bg-gray-100
              p-6
              rounded-lg
              flex-1
              min-w-[200px]
              h-[300px]
              z-10
              text-gray-800
              text-left
              mx-auto
              md:mx-0
              w-full
              md:w-[50%]
            "
          >
            {arrayProject[activeIndex].desc}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none" />
      </section>
    </main>
  );
};

export default ViewProjectPage;
