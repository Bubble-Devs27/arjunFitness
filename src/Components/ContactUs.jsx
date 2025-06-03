
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import axios from 'axios';

const ContactUs = () => {
 const [contact ,setContact] = useState('');
 const [msg , setMsg] = useState('');
 const [loading ,setLoading] =useState(false)
  const sendMail = async() => {
    setLoading(true)
    try {
      const response = await axios.post('/api/sendmail' , {contact ,msg })
      if(response.status == 200){
        alert("Mail sent successfully")
        setMsg("")
        setContact("")
        setLoading(false)        
      }
      else {
        alert("Failed to send mail")
        setLoading(false)
      }
    }
    catch ( error) {
      console.log(error);
      alert("Internal server error")
      setLoading(false)
    }
  }

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
        <motion.h1 className='text-2xl sm:text-3xl text-center text-white'
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
            <h1 className='text-[16px]  w-full text-white' >ARJUN SAINI</h1>
            <h1 className='text-2xl text-center mt-12 sm:mt-20 sm:text-4xl font-bold text-white'>Want to send us a message?</h1>
            <h1 className='text-[14px] sm:text-2xl text-gray-500 text-center'>Let us know how we can work together.</h1>
            <div className='h-24'></div>
            <div className='sm:w-[70%] w-[90%]'> <input type="text" name="" id="" value={contact} onChange={(event)=>{setContact(event.target.value)}} className='bg-black border rounded-[5px] p-2 w-full border-gray-500 text-white' placeholder='Email / phone' /></div>
            <div className='sm:w-[70%] w-[90%] bg-black   mt-3 text-white' > <textarea
               id="message"
               name="message"
               rows="5"
               value={msg}
               className="w-full border border-gray-500 rounded-[5px] p-2"
               placeholder="Type your message"
               onChange={(event)=>{setMsg(event.target.value)}}
               
              ></textarea></div>
              {loading ?    <div role="status" className='sm:w-50 w-[50%] py-2 flex justify-center items-center text-xl rounded-xl mt-11 mb-3.5'>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div> : <div className='bg-white text-black sm:w-50 w-[50%] py-2 flex justify-center items-center text-xl rounded-xl mt-11 mb-3.5' onClick={sendMail}>Send</div> }
           
       </motion.div>
    <div className='h-24'></div>
     </div>
  )
}

export default ContactUs
