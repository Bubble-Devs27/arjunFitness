"use-client"
import React from "react";
import { easeOut, motion } from "framer-motion";
import { useRouter } from 'next/navigation';
const Myjourney = () => {
  const router = useRouter();

  const goToGallery = () => {
    router.push('/gallery');
  };
  return (
    <motion.div
      className="px-2 sm:px-6  md:px-9 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6   }}
      viewport={{ amount: 0.1, once :true }}
      id="journey"
    >
      <div className="md:flex items-center justify-between   mt-4 text-white p-8 rounded-lg   overflow-hidden rubBack">
        {/* Left content */}
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            I started my fitness journey in 2020 during the peak of COVID 19.
            Like many others, I was a chubby kid looking to make a change in my
            life. Through dedication, consistency and hard work, I transformed
            myself from someone who struggled with that body image into
            chiseled, muscular who now help others achieve their fitness goals.
          </p>
          <button onClick={goToGallery}
           className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            View Gallery
          </button>
        </div>
        {/* Right certificate image */}
        <div className="relative ml-8 ">
          <motion.div className="transform -rotate-30 translate-x-10 translate-y-15 bg-white rounded-2xl">
            <img
              src="/path-to-your-certificate-image.png"
              alt="ACE Certification"
              className="w-64 h-48 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Myjourney;
