import React from 'react';
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
    },
    {
      id: 2,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit quisque faucibus ex. Adipiscing elit sapien vitae pellentesque."
    },
    {
      id: 3,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
    },
    {
      id: 4,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit consectetur adipisicing quisque faucibus ex. Adipisci quisque faucibus ex sapien vitae pellentesque."
    },
    {
      id: 5,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
    },
    {
      id: 6,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit quisque faucibus ex. Adipiscing elit sapien vitae pellentesque."
    },
    {
      id: 7,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
    },
    {
      id: 8,
      name: "Babbal Singh",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit consectetur adipisicing quisque faucibus ex. Adipisci quisque faucibus ex sapien vitae pellentesque."
    }
  ];

  // Duplicate the array for infinite scroll
  const duplicatedData = [...testimonialData, ...testimonialData];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-[#F6FF91] text-sm">★</span>
        ))}
        {hasHalfStar && <span className="text-[#F6FF91] text-sm">☆</span>}
        <span className="text-white text-sm ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <motion.div className='flex justify-center mt-9' id='testimonials' initial ={{opacity :0  ,y : 20 }} whileInView={{opacity :1 , y:0 }} transition={{duration :2 ,delay :0.2 }}  viewport={{amount: 0.1 , once :true  }}>
    <div className=" bg-black py-8 sm:w-[98%]  overflow-hidden rubBack2 rounded-xl">
        <h1 className=' text-3xl sm:text-4xl text-center mb-8 sm:mb-14' >Client Testimonials</h1>
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedData.map((testimonial, index) => {
            const isOdd = (testimonial.id % 2) === 1;
            const cardHeight = isOdd ? "h-70" : "min-h-48 max-h-60";
            const cardWidth = isOdd ? "w-72" : "w-80";
            
            return (
              <div
                key={`${testimonial.id}-${index}`}
                className={`${cardHeight} ${cardWidth}  rounded-lg p-4 mx-3 flex-shrink-0 border border-gray-700 relative`}
              >
                {/* Profile Image Placeholder */}
                <div className="w-12 h-12 bg-gray-600 rounded-lg mb-3"></div>
                
                {/* Name and Plan */}
                <div className="mb-3">
                  <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                  {testimonial.plan && (
                    <p className="text-[#F6FF91] text-xs font-medium">{testimonial.plan}</p>
                  )}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-6">
                  {testimonial.review}
                </p>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div></motion.div>
  );
};

export default Testimonials;