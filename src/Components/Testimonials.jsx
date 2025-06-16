import React from 'react';
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Nihal Sharma",
      plan: "ULTIMATE PLAN",
      rating: 4.8,
      image: "/api/placeholder/80/80",
      review: "He listens to your goals and helps achieve them step by step. My body feels much stronger and more active than before."
    },
    {
      id: 2,
      name: "Vivek Sandhar",
      plan: "BASIC PLAN",
      rating: 4.2,
      image: "/api/placeholder/80/80",
      review: "Workouts are challenging but fun. He motivates you to be regular and consistent. I lost 6 kgs in 2 months with his help."
    },
    {
      id: 3,
      name: "Angad",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Good experience overall. My posture and flexibility have improved. He is patient and makes sure I do the exercises correctly."
    },
    {
      id: 4,
      name: "Naman Verma",
      plan: "ULTIMATE PLAN",
      rating: 4.7,
      image: "/api/placeholder/80/80",
      review: "I had no idea about gym before. He guided me so well. Now fitness is a part of my life, thanks to his training."
    },
    {
      id: 5,
      name: "Nirmanyu ",
      plan: "ULTIMATE PLAN",
      rating: 5.0,
      image: "/api/placeholder/80/80",
      review: "Very professional and supportive trainer. He gives attention to every person and keeps pushing us in a positive way. Highly recommend him!"
    },
    {
      id: 6,
      name: "Surpreet",
      plan: "ADVANCE PLAN",
      rating: 4.0,
      image: "/api/placeholder/80/80",
      review: "I joined under him 3 months ago. My stamina and strength have really improved. He is very friendly and explains each workout clearly."
    },
    {
      id: 7,
      name: "Mandeep",
      plan: "BASIC PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Best decision to train with him. He understands your body and sets the right plan. I feel more confident and energetic now."
    },
    {
      id: 8,
      name: "Tavjot",
      plan: "UTLIMATE PLAN",
      rating: 4.5,
      image: "/api/placeholder/80/80",
      review: "Earlier I used to feel lazy and tired all the time. After training with him, my routine and mindset both have changed for good."
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
    <motion.div className='flex justify-center '  initial ={{opacity :0  ,y : 20 }} whileInView={{opacity :1 , y:0 }} transition={{duration :2 ,delay :0.2 }}  viewport={{amount: 0.1 , once :true  }}>
    <div className=" bg-black py-8 sm:w-[98%]  overflow-hidden rubBack2 rounded-xl">
        <h1 className=' text-3xl sm:text-4xl text-center mb-8 sm:mb-14 text-white' >Client Testimonials</h1>
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
                
                
                {/* Name and Plan */}
                <div className="mb-3">
                  <h3 className="text-white font-semibold text-xl">{testimonial.name}</h3>
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