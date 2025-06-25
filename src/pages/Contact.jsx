import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaQuestionCircle } from "react-icons/fa";
import natureImg from "../assets/banar.jpg";

export default function Contact() {
   return (
      <div className="relative min-h-screen py-10 px-4">
         {/* Background image with opacity */}
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: `url(${natureImg})`,
               opacity: 0.8,
               zIndex: -1,
            }}></div>

         {/* Content */}
         <div className="bg-white/90 p-8 rounded-xl shadow-lg max-w-3xl mx-auto relative">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
               Contact Information
            </h1>

            <div className="space-y-6 text-green-800 text-lg">
               <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Location</h3>
                     <p>123 Syloti Bus Terminal Road, Sylhet, Bangladesh</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Support Number</h3>
                     <p>+880 1711 123456</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Helpline</h3>
                     <p>+880 1919 654321</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <FaEnvelope className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Email</h3>
                     <p>support@sylotibus.com</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <FaClock className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Working Hours</h3>
                     <p>Sat - Thu: 8:00 AM - 8:00 PM</p>
                     <p>Friday: Closed</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <FaQuestionCircle className="text-green-600 text-2xl" />
                  <div>
                     <h3 className="font-semibold text-xl">Customer Support</h3>
                     <p>For inquiries and assistance, call our hotline or email us.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
