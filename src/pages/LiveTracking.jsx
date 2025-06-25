import React, { useEffect, useState } from "react";
import { FaBus, FaUserAlt } from "react-icons/fa";
import buses from "../data/buses.json";
import LiveTrackingMap from "../LiveTrackingMap";
import natureImg from "../assets/banar.jpg";
import { Link } from "react-router-dom";

const stopCoordinates = {
   Zindabazar: { lat: 24.8948, lng: 91.8687 },
   Ambarkhana: { lat: 24.8965, lng: 91.8701 },
   Amberkhana: { lat: 24.8952, lng: 91.8698 },
   Medical: { lat: 24.8995, lng: 91.8742 },
   Bandarbazar: { lat: 24.8931, lng: 91.8689 },
   Subidbazar: { lat: 24.9102, lng: 91.8827 },
   "Mazar Gate": { lat: 24.9018, lng: 91.8735 },
   "University Gate": { lat: 24.9091, lng: 91.8805 },
   "Sylhet Station": { lat: 24.8992, lng: 91.87 },
   Tilagor: { lat: 24.9121, lng: 91.8832 },
   Lakkatura: { lat: 24.9135, lng: 91.8845 },
   "Hazrat Shahjalal Mazar": { lat: 24.9025, lng: 91.8722 },
   Airport: { lat: 24.9631, lng: 91.8675 },
   Sreemongol: { lat: 24.3065, lng: 91.7296 },
   Habiganj: { lat: 24.3773, lng: 91.4155 },
   Bahubal: { lat: 24.4185, lng: 91.5042 },
   Ajmiriganj: { lat: 24.5185, lng: 91.2164 },
   Baniachang: { lat: 24.5425, lng: 91.3752 },
   Shibgonj: { lat: 24.9011, lng: 91.8733 },
   Kanaighat: { lat: 25.0211, lng: 92.0043 },
   Jaintapur: { lat: 25.0451, lng: 92.0982 },
   Khadimnagar: { lat: 24.9322, lng: 91.9221 },
   Bishwanath: { lat: 24.7371, lng: 91.6161 },
   "Tilagor Eco Park": { lat: 24.9154, lng: 91.8866 },
};

function getDistance(lat1, lon1, lat2, lon2) {
   const R = 6371;
   const dLat = ((lat2 - lat1) * Math.PI) / 180;
   const dLon = ((lon2 - lon1) * Math.PI) / 180;
   const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   return R * c;
}

export default function LiveTracking() {
   const [userLocation, setUserLocation] = useState(null);
   const [nearestStop, setNearestStop] = useState(null);
   const [busesAtStop, setBusesAtStop] = useState([]);

   useEffect(() => {
      if (!navigator.geolocation) {
         alert("Geolocation is not supported by your browser.");
         return;
      }

      navigator.geolocation.getCurrentPosition(
         (position) => {
            const userLoc = {
               lat: position.coords.latitude,
               lng: position.coords.longitude,
            };
            setUserLocation(userLoc);

            let closestStop = null;
            let minDistance = Infinity;

            const allStops = new Set();
            buses.forEach((bus) => {
               bus.route.forEach((stop) => allStops.add(stop));
            });

            allStops.forEach((stop) => {
               const coords = stopCoordinates[stop];
               if (coords) {
                  const dist = getDistance(userLoc.lat, userLoc.lng, coords.lat, coords.lng);
                  if (dist < minDistance) {
                     minDistance = dist;
                     closestStop = { name: stop, ...coords };
                  }
               }
            });

            setNearestStop(closestStop);

            if (closestStop) {
               const busesServingStop = buses.filter((bus) => bus.route.includes(closestStop.name));
               setBusesAtStop(busesServingStop);
            }
         },
         (err) => {
            console.error(err);
            alert("Unable to retrieve your location.");
         }
      );
   }, []);

   return (
      <div className="min-h-screen relative px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
         {/* Background image */}
         <div
            className="fixed inset-0 -z-10 bg-cover bg-center opacity-75"
            style={{ backgroundImage: `url(${natureImg})` }}
         />

         <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl bg-white bg-opacity-90 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center">
               Live Bus Stop Tracking
            </h2>

            {!userLocation && <p className="text-center text-gray-700">Loading your location...</p>}

            {userLocation && nearestStop && (
               <div className="space-y-8">
                  {/* Location Info Panel */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
                     {/* User Location */}
                     <div className="flex flex-col items-start justify-center bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="flex items-center gap-3 mb-2">
                           <FaUserAlt className="text-white text-2xl" />
                           <h4 className="text-lg font-semibold tracking-wide">You Are Here</h4>
                        </div>
                        <p className="text-sm font-mono opacity-90">
                           Lat: <span className="font-semibold">{userLocation.lat.toFixed(5)}</span>
                        </p>
                        <p className="text-sm font-mono opacity-90">
                           Lng: <span className="font-semibold">{userLocation.lng.toFixed(5)}</span>
                        </p>
                     </div>

                     {/* Nearest Stop */}
                     <div className="flex flex-col items-start justify-center bg-gradient-to-br from-green-700 to-green-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="flex items-center gap-3 mb-2">
                           <FaBus className="text-white text-2xl" />
                           <h4 className="text-lg font-semibold tracking-wide">Nearest Stop</h4>
                        </div>
                        <p className="text-lg font-extrabold">{nearestStop.name}</p>
                        <p className="text-sm font-mono opacity-90">
                           Lat: <span className="font-semibold">{nearestStop.lat.toFixed(5)}</span>
                        </p>
                        <p className="text-sm font-mono opacity-90">
                           Lng: <span className="font-semibold">{nearestStop.lng.toFixed(5)}</span>
                        </p>
                     </div>
                  </div>

                  {/* Map */}
                  <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden shadow-md">
                     <LiveTrackingMap
                        userLocation={userLocation}
                        nearestStopLocation={nearestStop}
                     />
                  </div>

                  {/* Bus Panel */}
                  <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-700 to-green-900 rounded-xl p-6 shadow-lg ring-2 ring-green-500 text-gray-100">
                     <h3 className="text-xl sm:text-2xl font-extrabold mb-5 flex items-center gap-3">
                        <FaBus className="text-green-400 animate-bounce" />
                        {busesAtStop.length} Bus{busesAtStop.length !== 1 ? "es" : ""} serving{" "}
                        <span className="decoration-green-400">"{nearestStop.name}"</span> stop
                     </h3>

                     {busesAtStop.length === 0 ? (
                        <p className="font-medium italic text-base sm:text-lg text-green-300">
                           No buses found for this stop.
                        </p>
                     ) : (
                        <ul className="space-y-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-green-900">
                           {busesAtStop.map((bus) => (
                              <Link
                                 to={`/bus/${bus.id}`}
                                 key={bus.id}
                                 className="block font-semibold text-green-200 text-base sm:text-lg hover:underline"
                                 title={`View details of ${bus.name}`}>
                                 <li
                                    className="flex items-center gap-4 p-3 rounded-lg bg-green-800 bg-opacity-60 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                                    title={`Route: ${bus.route.join(" → ")}`}>
                                    <FaBus className="text-green-400 text-xl flex-shrink-0" />
                                    <div>
                                       {bus.name}
                                       <p
                                          className="text-green-300 text-sm truncate max-w-xs sm:max-w-xl"
                                          title={bus.route.join(" → ")}>
                                          Route: {bus.route.join(" → ")}
                                       </p>
                                    </div>
                                 </li>
                              </Link>
                           ))}
                        </ul>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
