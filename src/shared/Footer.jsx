import React from "react";

export default function Footer() {
   return (
      <footer className="bg-green-900 text-white py-10 w-full">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
               <h3 className="text-xl font-bold mb-3">About Syloti Bus</h3>
               <p className="text-sm text-gray-300">
                  Your one-stop destination for exploring Sylhet with bus routes, hotels,
                  restaurants, and stunning tourist spots.
               </p>
            </div>
            <div>
               <h3 className="text-xl font-bold mb-3">Quick Links</h3>
               <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                     <a href="#" className="hover:text-white">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Routes
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Spots
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Hotels
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Restaurants
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-xl font-bold mb-3">Contact Us</h3>
               <p className="text-sm text-gray-300">Email: info@sylotibus.com</p>
               <p className="text-sm text-gray-300">Phone: +880-123456789</p>
               <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-green-300">
                     Facebook
                  </a>
                  <a href="#" className="hover:text-green-300">
                     Instagram
                  </a>
                  <a href="#" className="hover:text-green-300">
                     YouTube
                  </a>
               </div>
            </div>
         </div>
         <div className="text-center text-sm text-gray-400 mt-10">
            © {new Date().getFullYear()} Syloti Bus. All rights reserved.
         </div>
      </footer>
   );
}
