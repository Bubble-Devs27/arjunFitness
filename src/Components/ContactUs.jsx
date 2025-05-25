import React from 'react'
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
const ContactUs = () => {
    const openWhatsapp = () =>{
   const phoneNumber = "14372699697"; // Replace with your number (with country code, no "+" or spaces)
    const message = "Hello, I want to know more!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");    
    }
    const openInstagram = () =>{
         window.open("https://www.instagram.com/arjun_saini_?igsh=cno5bTk5bTR1OWsz", "_blank");
    }
    const openSnapchat = () =>{
        window.open("https://www.snapchat.com/add/arjun_saini02?share_id=XJGe2te3EQQ&locale=en-IN" , "_blank")
    }
   
  return (
    <div className='flex flex-col items-center '>
        <motion.h1 className='text-2xl sm:text-3xl text-center'
          initial ={{opacity :0 ,y:30  }} whileInView={{opacity :1 ,y:0  }} transition={{duration :1 ,delay :0.2 }}  viewport={{amount: 0.3 , once :true  }}
        >GET IN TOUCH</motion.h1>
        <div className='flex gap-9 justify-center items-center mt-7'>
            <motion.div onClick={openInstagram} initial ={{opacity :0 ,x:-30  }} whileInView={{opacity :1 ,x:0  }} transition={{duration :1 ,delay :0.2 }}  viewport={{amount: 0.3 , once :true  }}><FaInstagram className="w-10 h-10 text-pink-500" /></motion.div>
            <motion.div onClick={openWhatsapp} initial ={{opacity :0 ,x:-30  }} whileInView={{opacity :1 ,x:0  }} transition={{duration :1 ,delay :0.4 }}  viewport={{amount: 0.3 , once :true  }}><FaWhatsapp className="w-10 h-10 text-green-500" /></motion.div>
            <motion.div onClick={openSnapchat} initial ={{opacity :0 ,x:-30  }} whileInView={{opacity :1 ,x:0  }} transition={{duration :1 ,delay :0.6 }}  viewport={{amount: 0.3 , once :true  }}><FaSnapchatGhost className="w-10 h-10 text-yellow-400" /></motion.div>
        </div>
       {/* Main Form */}
       <motion.div className='contact-form w-[90vw] sm:w-[60vw] bg-gray-800 mt-15 rounded-2xl px-2.5 py-3.5 flex flex-col items-center'
       initial ={{opacity :0 ,  }} whileInView={{opacity :1 ,  }} transition={{duration :1 ,delay :0.6 }}  viewport={{amount: 0.3 , once :true  }} >
            <h1 className='text-[16px]  w-full' >ARJUN SAINI</h1>
            <h1 className='text-2xl text-center mt-12 sm:mt-20 sm:text-4xl font-bold'>Want to send us a message?</h1>
            <h1 className='text-[14px] sm:text-2xl text-gray-500 text-center'>Let us know how we can work together.</h1>
            <div className='h-24'></div>
            <div className='sm:w-[70%] w-[90%]'> <input type="text" name="" id="" className='bg-black border rounded-[5px] p-2 w-full border-gray-500' placeholder='Email / phone' /></div>
            <div className='sm:w-[70%] w-[90%] bg-black   mt-3' > <textarea
              id="message"
               name="message"
                rows="5"
               className="w-full border border-gray-500 rounded-[5px] p-2"
               placeholder="Type your message"
              ></textarea></div>
            
            <div className='bg-white text-black sm:w-50 w-[50%] py-2 flex justify-center items-center text-xl rounded-xl mt-11 mb-3.5'>Send</div>
       </motion.div>
    <div className='h-24'></div>
     </div>
  )
}

export default ContactUs
