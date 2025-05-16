"use client";
import { FaStopwatch } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <BsPersonCheck className="w-12 h-12 text-white" />,
      title: "Personalized programs",
      description: "Customized workout plans based on your age, fitness level and goals"
    },
    {
      icon: <FaStopwatch className="w-12 h-12 text-white" />,
      title: "Personalized programs",
      description: "Structured programs designed to show visible results in just 3 months"
    },
    {
      icon: <HiUserGroup className="w-12 h-12 text-white" />,
      title: "Personalized programs",
      description: "Programs adapted for different age groups from 22 to 60"
    }
  ];

  return (
    <section className="bg-black text-white py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial = {{opacity :0 , y :70}} whileInView={{opacity :1 , y:0}} transition={{duration :0.6 }}  viewport={{amount: 0.1 }} className="text-center mb-16  ">
          <h2 className="text-4xl font-bold mb-2">Why choose us</h2>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-[30vw] h-px bg-white mx-2"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>

        <motion.div initial = {{opacity :0 , y :70}} whileInView={{opacity :1 , y:0}} transition={{duration :0.6 }}  viewport={{amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-8   ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;