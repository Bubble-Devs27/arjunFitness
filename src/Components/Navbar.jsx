// components/Navbar.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav 
    className="fixed top-8 left-0 w-full z-50  justify-center items-center hidden md:flex  "
    initial = {{opacity :0 , y:-10}}
    animate = {{opacity :1 , y:0}}
    transition={{duration :0.8  , delay :2}}
    >
      <div className="bg-[rgba(92,92,92,0.15)] backdrop-blur-lg py-4 px-10 rounded-2xl  ">
        <Link href="/" className="text-xl font-normal text-white mr-12">
          About me
        </Link>
        <Link href="/" className="text-xl font-normal text-white mr-12">
          My Journey
        </Link>
        <Link href="/" className="text-xl font-normal text-white mr-12">
          Programs
        </Link>
        <Link href="/" className="text-xl font-normal text-white mr-12">
          Testimonials
        </Link>
        <Link href="/" className="text-xl font-normal text-white">
          Contact us
        </Link>
      </div>
    </motion.nav>
  );
}
{
  /* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyApp
          </Link>
          <div className="space-x-4 hidden md:flex">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
              Contact
            </Link>
          </div>
        </div>
      </div> */
}
