import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
const plans = [
  {
    id: 1,
    title: "BASIC PLAN",
    period: "/month",
    price: "$99",
    subtitle: "",
    badge: "Beginer Friendly",
    features: [
      "3 Hour class *Only on first day*",
      "*1st Day offline visit*",
      "* Diet and meal plans available*",
      "*Weekly follow up *online sessions only"
    ],
    yPrice : '$1188'
  },
  {
    id: 2,
    title: "ADVANCE PLAN",
    period: "/month",
    price: "$249",
    subtitle: "(Basic included)",
    badge: "Best Seller",
    features: [
      "All Basic plan features",
      "Weekly offline session",
      "New diet plan every week",
      "Flexible session schedule"
    ]
    ,
    yPrice : '$2988'
  },
  {
    id: 3,
    title: "ULTIMATE PLAN",
    period: "/month",
    price: "$277",
    subtitle: "(Basic + Advance included)",
    badge: "",
    features: [
      "All Basic plan Features",
      "All Advance plan features",
      "Diet review after every end of the day",
      "Weekly 2 offline sessions",
      "Flexible session schedule"
    ]
    ,
    yPrice : '$3324'
  }
];
const pricingData = [
    {
      id: 1,
      name: "BASIC PLAN",
      price: 99,
      badge: "Beginner Friendly",
      badgeColor: "bg-[#F6FF91]",
      features: [
        "3 Hour class *Only on first day",
        "1st Day offline visit",
        "Diet and meal plan available",
        "Weekly follow up *online sessions only"
      ],
      highlighted: false,
      borderColor: "border-gray-600"
      ,
    yPrice : '1188'
    },
    {
      id: 2,
      name: "ADVANCE PLAN",
      price: 249,
      badge: "Best Seller",
      badgeColor: "bg-[#F6FF91]",
      features: [
        "All Basic plan features",
        "Weekly offline session",
        "New diet plan every week",
        "Flexible session schedule"
      ],
      highlighted: false,
      borderColor: "border-gray-600"
      ,
    yPrice : '2988'
    },
    {
      id: 3,
      name: "ULTIMATE PLAN",
      price: 277,
      badge: null,
      badgeColor: "",
      features: [
        "All Basic plan features",
        "All Advance plan features",
        "Diet review after every end of the day",
        "Weekly 2 offline sessions",
        "Flexible session schedule"
      ],
      highlighted: false,
      borderColor: "border-gray-600"
      ,
    yPrice : '3324'
    }
  ];
const Plans = () => {
   const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
    const [expandedTab, setExpandedTab] = useState(null);

  const toggleTab = (tabId) => {
    setExpandedTab(expandedTab === tabId ? null : tabId);
  };
  return (
    <motion.div className='flex flex-col  justify-center items-center mt-28' id='plan' initial ={{opacity :0 ,y:50  }} whileInView={{opacity :1 ,y:0  }} transition={{duration :1 ,delay :0.3 }}  viewport={{amount: 0.3 , once :true  }}>
      <div className=' w-[80%] sm:w-[60%] text-center'>
        <h1 className='text-3xl sm:text-4xl'>Training Programs</h1>
        <h1 className='text-[16px] sm:text-xl text-gray-400 mt-2.5'>Our plans are designed to be affordable, and aligned to your unique needs.</h1>
      </div>

      {/* toggle Button */}
      <div className="  flex  justify-center mt-3">
      <button
        onClick={toggleBilling}
        className={`
          relative inline-flex items-center h-12 w-32 rounded-full border-2 border-gray-600
          transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4
          ${isYearly ? 'bg-black' : 'bg-black'}
        `}
      >
        {/* Toggle Circle */}
        <div
          className={`
            absolute w-9 h-9 bg-white rounded-full shadow-lg
            transition-transform duration-300 ease-in-out
            ${isYearly ? 'transform translate-x-20' : 'transform translate-x-1'}
          `}
        />
        
        {/* Text */}
        <span className={` w-full  text-white text-sm   text-center font-medium ${isYearly ? 'mr-3' : 'ml-3'}`}>
          {isYearly ? 'Year' : 'Month'}
        </span>
      </button>
    </div>
    <h1 className='mt-1.5 text-[13px] text-[#F6FF91]'> {isYearly ? "Click to switch /Month" : "Click to switch /Year"} </h1>
    {/* Plans  ----- MOBILE ------*/}
     <div className=" bg-black p-6 flex md:hidden items-center justify-center mt-3.5 min-w-[85%]">
      <div className="w-full max-w-md space-y-4">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className="border border-gray-600 rounded-2xl bg-black overflow-hidden"
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header - Always Visible */}
            <div 
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => toggleTab(plan.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-medium text-lg">
                    {plan.title} <span className="text-[#F6FF91]">{isYearly ? "/Year" : plan.period}</span>
                  </h3>
                  
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-2xl font-bold">{isYearly ? plan.yPrice : plan.price}</span>
                  {plan.subtitle && (
                    <span className="text-gray-400 text-sm">{plan.subtitle}</span>

                  )}
                  {plan.badge && (
                    <span className="bg-[#F6FF91] text-black text-xs px-2 py-1 rounded font-medium">
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: expandedTab === plan.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                <ChevronDown size={24} />
              </motion.div>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {expandedTab === plan.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-4 space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Plans  ----- Desktop ------*/}
     <div className=" bg-black hidden md:flex items-center justify-center p-8">
      <div className="flex flex-row gap-6  w-full justify-center">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={` rounded-lg border-2 ${plan.borderColor} p-6 relative transition-all duration-300 hover:scale-105`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className={`absolute -top-3 left-4 ${plan.badgeColor} text-black text-xs px-3 py-1 rounded-full font-medium`}>
                {plan.badge}
              </div>
            )}
            
            {/* Plan Name */}
            <h3 className="text-white text-lg font-bold mb-4 mt-2">
              {plan.name}
            </h3>
            
            {/* Price */}
            <div className="text-white mb-6">
              <span className="text-3xl font-bold">${isYearly ? plan.yPrice : plan.price}</span>
              <span className="text-[#F6FF91] ml-1">{isYearly ? "/Year" : "/month"}</span>
            </div>
            
            {/* Features */}
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="text-gray-300 text-sm leading-relaxed">
                  ✔ {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>    

    </motion.div>
  )
}

export default Plans