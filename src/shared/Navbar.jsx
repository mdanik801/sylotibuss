import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/busslogo.png";

export default function Navbar() {
   const [show, setShow] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
   const lastScrollY = useRef(0);

   const navLinks = [
      { label: "Home", path: "/" },
      { label: "Schedules", path: "/schedules" },
      { label: "Live Tracking", path: "/live-tracking" },
      { label: "Contact", path: "/contact" },
      { label: "Developer Profile", path: "/developer_profile" },
   ];

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
            {navLinks.map((link) => (
               <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 font-medium hover:text-green-800 transition">
                  {link.label}
               </Link>
            ))}
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
               {navLinks.map((link) => (
                  <Link
                     key={link.path}
                     to={link.path}
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700 font-medium hover:text-green-800 transition">
                     {link.label}
                  </Link>
               ))}
            </div>
         )}
      </nav>
   );
}
