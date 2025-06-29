// src/pages/Investor.jsx

import React from "react";
import { FaMoneyCheckAlt, FaUsers, FaRocket, FaHandshake } from "react-icons/fa";

export default function Investor() {
   return (
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4">
         <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mb-6">
               🌟 Be a Partner in Our Vision!
            </h1>
            <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
               Syloti Bus is an innovative bus tracking and scheduling platform built to make daily
               commuting easier for thousands of passengers in Sylhet. Join us to shape a smarter
               transport system for Bangladesh.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-green-50 rounded-xl p-6 shadow-md flex items-start gap-4">
                  <FaMoneyCheckAlt className="text-green-700 text-3xl" />
                  <div>
                     <h3 className="text-xl font-semibold text-green-700">Why Invest?</h3>
                     <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Rapidly growing local transport sector</li>
                        <li>Thousands of daily users</li>
                        <li>Revenue from ads & premium subscriptions</li>
                     </ul>
                  </div>
               </div>

               <div className="bg-green-50 rounded-xl p-6 shadow-md flex items-start gap-4">
                  <FaRocket className="text-green-700 text-3xl" />
                  <div>
                     <h3 className="text-xl font-semibold text-green-700">Our Goal</h3>
                     <p className="text-gray-700 mt-2">
                        50,000 users, 100+ buses connected, and Android app launch within 1 year.
                     </p>
                  </div>
               </div>

               <div className="bg-green-50 rounded-xl p-6 shadow-md flex items-start gap-4">
                  <FaUsers className="text-green-700 text-3xl" />
                  <div>
                     <h3 className="text-xl font-semibold text-green-700">Target Market</h3>
                     <p className="text-gray-700 mt-2">
                        Local and intercity bus passengers of Sylhet, including students, office
                        workers, and tourists.
                     </p>
                  </div>
               </div>

               <div className="bg-green-50 rounded-xl p-6 shadow-md flex items-start gap-4">
                  <FaHandshake className="text-green-700 text-3xl" />
                  <div>
                     <h3 className="text-xl font-semibold text-green-700">Your Support Needed</h3>
                     <p className="text-gray-700 mt-2">
                        We are seeking an initial investment of ৳1,00,000 — for advertisement setup,
                        user outreach, and route database development.
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-12 text-center">
               <h2 className="text-2xl font-semibold text-green-800 mb-2">Get in Touch</h2>
               <p className="text-gray-700">Md Aulad Hossain Anik</p>
               <p className="text-black">📧 mdanikpro801@gmail.com | 📞 +8801856713852</p>
            </div>
         </div>
      </div>
   );
}
