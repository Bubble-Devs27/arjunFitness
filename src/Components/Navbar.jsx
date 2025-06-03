// components/Navbar.js
"use client";
import Image from 'next/image';
import logo from '../app/Assets/logo.png'
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About me', href: '#about' },
    { name: 'Certification', href: '#ace' },
    { name: 'Programs', href: '#plan' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact us', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <motion.nav 
    className="fixed top-8 left-0 w-full z-50  justify-center items-center hidden md:flex  "
    initial = {{opacity :0 , y:-10}}
    animate = {{opacity :1 , y:0}}
    transition={{duration :0.8  , delay :2}}
    >
      <div className="bg-[rgba(92,92,92,0.15)] backdrop-blur-lg py-4 px-10 rounded-2xl  ">
        <Link href="#about"  className="text-xl font-normal text-white mr-12">
          About me
        </Link>
        <Link href="#ace" scroll={true} className="text-xl font-normal text-white mr-12">
          Certification
        </Link>
        <Link href="#plan" scroll={true} className="text-xl font-normal text-white mr-12">
          Programs
        </Link>
        <Link href="#testimonials" scroll={true} className="text-xl font-normal text-white mr-12">
          Testimonials
        </Link>
        <Link href="#contact" className="text-xl font-normal text-white">
          Contact us
        </Link>
      </div>
    </motion.nav>
    {/* For the Mobile  */}
    <motion.nav 
    className="fixed top-0 left-0 w-full z-50   flex md:hidden   "
    initial = {{opacity :0 , y:-10}}
    animate = {{opacity :1 , y:0}}
    transition={{duration :0.8  , delay :2}} >
    
     <nav className="fixed left-0 right-0 bg-[rgba(0,0,0,0.27)]  ">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center">
             <Image src={logo} alt="Logo" width={50} height={50} />  
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={handleLinkClick}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-transparent z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-white text-xl font-semibold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block px-6 py-4 text-white hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 transform hover:translate-x-2 ${
                      isMenuOpen ? 'animate-slide-in' : ''
                    }`}
                    style={{
                      animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 4s ease-out forwards;
        }
      `}</style>

    </motion.nav>
    </>
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
