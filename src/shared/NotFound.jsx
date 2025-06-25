import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-4">
         <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">404</h1>
         <p className="text-2xl sm:text-3xl font-semibold text-white mt-4">Oops! Page Not Found</p>
         <p className="text-white mt-2 mb-8 max-w-md text-center">
            The page you are looking for doesn’t exist or has been moved.
         </p>
         <Link
            to="/"
            className="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-100 transition">
            Go Back Home
         </Link>
      </div>
   );
}
