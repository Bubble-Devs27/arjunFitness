import React from 'react';
import { easeOut, motion } from "framer-motion";
import logo from '../app/Assets/cert.png'
import Image from 'next/image';
const ACECertified = () => {
  return (
    <motion.div className="px-2 sm:px-6  md:px-9 " initial ={{opacity :0 , y :70 }} whileInView={{opacity :1 , y:0 }} transition={{duration :0.6 }}  viewport={{amount: 0.1, once :true   }} >
      <div className="md:flex items-center justify-between   mt-4 text-white p-8 rounded-lg   overflow-hidden rubBack">
       
        {/* Left content */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-4">ACE Certified</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            As a certified ACE Personal Trainer, you empower individuals to achieve their 
            fitness aspirations through expertly designed and motivating workout 
            programs. With over 30 years of experience and scientifically backed 
            credentials, ensures you provide safe, effective, and personalized guidance 
            to help clients reach their full potential.
          </p>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            View Certification
          </button>
        </div>
         {/* Right certificate image */}
        <div className="relative ml-8 ">
          <motion.div className="transform -rotate-30 translate-x-10 translate-y-15 rounded-2xl">
            <Image 
              src={logo} 
              alt="ACE Certification" 
              className="w-64 h-48 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default ACECertified;