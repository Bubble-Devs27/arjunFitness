
"use client";
import Typewriter from 'typewriter-effect';
import ACECertified from "@/Components/ACECertified";
import Myjourney from "@/Components/MyJourney";
import Navbar from "@/Components/Navbar";
import Plans from "@/Components/Plans";
import Testimonials from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs";
import {motion} from "framer-motion"
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import logo from './Assets/logo.png'
import ContactUs from "@/Components/ContactUs";
export default function Home() {
  console.log(logo)
  return (
    <>
    <Navbar/>
    <div className="bg-black" id="about" >
      
     <motion.div
      className=" h-[91vh] md:h-screen sm:h-screen w-full  bg-cover bg-center bg-no-repeat css-back  flex justify-between items-center flex-col " 
       initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :2  }}>
      <motion.div 
      initial = {{opacity :0 , x:-30}}
       animate = {{opacity :1 , x:0}}
       transition={{duration :0.8  , delay :0.5}}
       className=" w-[98%] hidden sm:flex">
      <Image src={logo} alt="Logo" width={100} height={100} />  
      </motion.div>
      < div className="sm:mt-[10vh] mt-[30vh]"  >
       <motion.h1 className=" md:text-8xl sm:text-6xl text-5xl text-center font-mono text-white "
       initial = {{opacity :0 , y:10}}
       animate = {{opacity :1 , y:0}}
       transition={{duration :0.8  , delay :0.5}}
       >ARJUN SAINI</motion.h1> 
       
         <motion.p className="text-[16px] w-[80vw]  sm:w-[80vw] md:w-[70vw] lg:w-[50vw] text-center mt-7 text-[#B5B5B5] italic "
         initial = {{opacity :0 , y:-10}}
         animate = {{opacity :1 , y:0}}
         transition={{duration :0.8  , delay :0.5}}>
         Expert guided fitness programs tailored for ages 22-60. Whether you’re aiming for a six pack or overall fitness, we’ve got you covered.
        </motion.p> 
      </ div>

      <div>
        <motion.div className="flex flex-col justify-center items-center"  initial = {{opacity :0 }} animate = {{opacity: 1, y: 0}} transition={{duration :1 ,delay :2  }}>
          <FaChevronDown size={24} color="white" />
         </motion.div>
        <motion.div className="flex flex-col justify-center items-center"  initial = {{opacity :0 ,y :-20 }} animate = {{opacity: [0, 1, 0] , y: 0}} transition={{duration :2,delay :2 ,repeat: Infinity, repeatType: "loop" }}>
          <FaChevronDown size={24} color="white" />
         </motion.div>
        <motion.h1 className="text-xl mt-2 mb-1.5 "  initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :1 ,delay :2  }}>Start your Journey</motion.h1>
      </div>
     </motion.div>
    </div>
    <WhyChooseUs/>
    <div id='ace' className="h-2 mt-30"></div>
    <ACECertified/>
    <Myjourney/>
    <div id='plan' className="h-28"></div>
    <Plans/>
    <div  className="mt-9"  id="testimonials"></div>
    <Testimonials/>
    <div id="contact" className="h-24"></div>
    <ContactUs/>
    </>
  );
}
