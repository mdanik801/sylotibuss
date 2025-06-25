import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import banar from "../assets/banar.jpg";

import spotsData from "../data/spot.json";
import routesData from "../data/stops.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../shared/Footer";
import { Link } from "react-router";

export default function Home() {
   const [spots, setSpots] = useState([]);

   useEffect(() => {
      setSpots(spotsData);
   }, []);

   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   };

   return (
      <div className=" w-full bg-green-50">
         {/* Hero Section */}
         <div className="relative ">
            <img
               src={banar}
               alt="Sylhet Background"
               className="w-full h-[500px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 flex flex-col justify-center items-center text-white text-center px-4 rounded-xl">
               <h2 className="text-4xl font-bold mb-4">SYLOTI BUS</h2>
               <div className="w-full max-w-lg mb-6">
                  <Link to={"/schedules"}>
                     <input
                        type="text"
                        placeholder="Search your route"
                        className="w-full p-3 bg-white rounded-lg opacity-60 text-black"
                     />
                  </Link>
               </div>

               {/* Tourist Spots Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl ">
                  {spots.map((spot) => (
                     <div
                        key={spot.id}
                        className="bg-white/80 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
                        <img
                           src={spot.image}
                           alt={spot.name}
                           className="w-full h-28 object-cover"
                        />
                        <p className="text-sm text-black p-2 text-center font-medium">
                           {spot.name}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Bus Slider Section */}
         <div className="bg-white py-12 px-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Popular Routes</h3>
            <Slider {...sliderSettings}>
               {routesData.map((route) => (
                  <div key={route.id} className="px-2">
                     <div className="bg-green-100 rounded-xl overflow-hidden shadow-md">
                        <img src={route.image} alt="Bus" className="w-full h-48 object-cover" />
                        <div className="p-4">
                           <h4 className="text-lg font-semibold text-green-700">{route.route}</h4>
                           <p className="text-sm text-gray-600">{route.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
         {/* Sylhet Holiday Destination Info Section */}
         <div className="bg-green-800 text-white py-12 px-6 text-center flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-2">Sylhet Holiday Destination</h2>
            <p className="text-green-200 mb-8">Find the best of Sylhet!</p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
               <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">Rainforest Hike</h4>
                  <p className="text-sm text-green-100 mb-3">
                     Explore untouched rainforests and rich biodiversity.
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                     Read More
                  </button>
               </div>
               <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">Waterfall & River</h4>
                  <p className="text-sm text-green-100 mb-3">
                     Discover majestic waterfalls and peaceful rivers.
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                     Read More
                  </button>
               </div>
               <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">Green Tea Garden</h4>
                  <p className="text-sm text-green-100 mb-3">
                     Wander through Sylhet's iconic tea estates.
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                     Read More
                  </button>
               </div>
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl ">
               {spots.map((spot) => (
                  <div
                     key={spot.id}
                     className="bg-white/80 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
                     <img src={spot.image} alt={spot.name} className="w-full h-28 object-cover" />
                     <p className="text-sm text-black p-2 text-center font-medium">{spot.name}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Discover Sylhet Banner */}
         <div
            className="relative h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${banar})` }}>
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
               <h2 className="text-4xl text-white font-bold">Discover Sylhet</h2>
            </div>
         </div>

         {/* Hotel & Restaurant Info */}
         <div className="bg-white py-12 px-6 text-center">
            <p className="max-w-3xl mx-auto mb-6 text-gray-700">
               Many tourist places and resting places can be found in and around Sylhet City. A
               visit to Sylhet would not be complete without visiting the green tea gardens,
               beautiful waterfalls, Ratargul Swamp Forest, Lalakhal River, Bisnakandi, Jaflong, and
               many more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <div className="border p-6 rounded-xl w-full sm:w-1/3">
                  <h4 className="text-lg font-semibold mb-2">HOTELS</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                     READ MORE
                  </button>
               </div>
               <div className="border p-6 rounded-xl w-full sm:w-1/3">
                  <h4 className="text-lg font-semibold mb-2">RESTAURANTS</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                     READ MORE
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
