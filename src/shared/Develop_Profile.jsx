// src/pages/Profile.jsx

import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Profile() {
   return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12 px-4">
         <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300">
            {/* Profile Image */}
            <div className="relative group">
               <img
                  src={profilePic}
                  alt="Md Aulad Hossain Anik"
                  className="w-52 h-52 rounded-full object-cover border-4 border-green-500 group-hover:scale-105 transition duration-300 shadow-md"
               />
               <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-sm px-3 py-1 rounded-full shadow-lg animate-bounce scale-100 group-hover:scale-110 transition-all duration-300">
                  Developer
               </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
               <h1 className="text-4xl font-extrabold text-green-800 mb-2">
                  Md Aulad Hossain Anik
               </h1>
               <p className="text-lg text-gray-700 mb-6 italic">
                  Full-Stack Web Developer | MERN Stack Enthusiast
               </p>

               <div className="space-y-6 text-gray-800 text-[16px]">
                  <div>
                     <h3 className="text-xl font-semibold text-green-700 mb-1">🎓 Education</h3>
                     <p>
                        Diploma in Computer Science & Technology
                        <br />
                        <span className="text-sm text-gray-600">
                           Habiganj Polytechnic Institute
                        </span>
                     </p>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold text-green-700 mb-1">💼 Skills</h3>
                     <ul className="grid grid-cols-2 list-disc list-inside gap-y-1">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Tailwind CSS</li>
                        <li>Firebase</li>
                        <li>REST API</li>
                        <li>Git & GitHub</li>
                        <li>Netlify & Vercel</li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold text-green-700 mb-1">📁 Projects</h3>
                     <ul className="list-disc list-inside">
                        <li>
                           <strong>Syloti Bus:</strong> A bus tracking system for Sylhet using React
                           & JSON.
                        </li>
                        <li>Face Attendance App (Coming Soon)</li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold text-green-700 mb-1">📞 Contact</h3>
                     <p>
                        Email:{" "}
                        <a href="mailto:mdanikpro801@gmail.com" className="text-black no-underline">
                           mdanikpro801@gmail.com
                        </a>
                     </p>
                     <p>
                        Phone:{" "}
                        <a href="tel:+8801856713852" className="text-black no-underline">
                           +8801856713852
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
