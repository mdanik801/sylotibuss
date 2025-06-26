import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/busslogo.png";

export default function Navbar() {
   const [show, setShow] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
   const lastScrollY = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY < lastScrollY.current) {
            setShow(true);
         } else if (window.scrollY > lastScrollY.current) {
            setShow(false);
            setMenuOpen(false); // close menu on scroll
         }
         lastScrollY.current = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const toggleMenu = () => setMenuOpen((prev) => !prev);

   return (
      <nav
         className={`fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-3 flex justify-between items-center transition-transform duration-300 ${
            show ? "translate-y-0" : "-translate-y-full"
         } z-50`}>
         {/* Logo and Brand */}
         <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-green-800 font-extrabold text-2xl tracking-wide">SYLOTI BUS</span>
         </div>

         {/* Desktop Nav */}
         <div className="hidden md:flex space-x-6">
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

         {/* Mobile Menu Icon */}
         <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
               {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
         </div>

         {/* Mobile Nav Drawer */}
         {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col items-start space-y-3 md:hidden">
               <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-green-800 transition">
                  Home
               </Link>
               <Link
                  to="/schedules"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-green-800 transition">
                  Schedules
               </Link>
               <Link
                  to="/live-tracking"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-green-800 transition">
                  Live Tracking
               </Link>
               <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-green-800 transition">
                  Contact
               </Link>
            </div>
         )}
      </nav>
   );
}
