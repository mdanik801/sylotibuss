import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/busslogo.png";

export default function Navbar() {
   const [show, setShow] = useState(true);
   const lastScrollY = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY < lastScrollY.current) {
            // Scrolling up — show navbar
            setShow(true);
         } else if (window.scrollY > lastScrollY.current) {
            // Scrolling down — hide navbar
            setShow(false);
         }
         lastScrollY.current = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={`fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-3 flex justify-between items-center transition-transform duration-300 ${
            show ? "translate-y-0" : "-translate-y-full"
         }`}
         style={{ zIndex: 1000 }}>
         {/* Logo and Brand */}
         <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-green-800 font-extrabold text-2xl tracking-wide">SYLOTI BUS</span>
         </div>

         {/* Navigation Links */}
         <div className="space-x-6">
            <Link to="/" className="text-gray-700 font-medium hover:text-green-800 transition">
               Home
            </Link>

            <Link
               to="/schedules"
               className="text-gray-700 font-medium hover:text-green-800 transition">
               Schedules
            </Link>
            <Link
               to="/live-tracking"
               className="text-gray-700 font-medium hover:text-green-800 transition">
               Live Tracking
            </Link>
            <Link
               to="/contact"
               className="text-gray-700 font-medium hover:text-green-800 transition">
               Contact
            </Link>
         </div>
      </nav>
   );
}
