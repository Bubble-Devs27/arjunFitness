
"use client";

import ACECertified from "@/Components/ACECertified";
import Navbar from "@/Components/Navbar";
import Plans from "@/Components/Plans";
import WhyChooseUs from "@/Components/WhyChooseUs";
import {motion} from "framer-motion"
 import { FaChevronDown } from 'react-icons/fa';
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="bg-black" >
     <motion.div
      className=" h-[91vh] md:h-screen sm:h-screen w-full  bg-cover bg-center bg-no-repeat css-back  flex justify-between items-center flex-col " 
       initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :1  }}>
      < div className="mt-[30vh]"  >
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
        <motion.div className="flex flex-col justify-center items-center"  initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :1 ,delay :2  }}>
          <FaChevronDown size={24} color="white" />
         </motion.div>
        <motion.div className="flex flex-col justify-center items-center"  initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :1 ,delay :2  }}>
          <FaChevronDown size={24} color="white" />
         </motion.div>
        <motion.h1 className="text-xl mt-2 mb-1.5 "  initial = {{opacity :0 , y:0}} animate = {{opacity :1 , y:0}} transition={{duration :1 ,delay :2  }}>Start your Journey</motion.h1>
      </div>
     </motion.div>
    </div>
    <WhyChooseUs/>
    <ACECertified/>
    <ACECertified/>
    <Plans/>
    </>
  );
}
