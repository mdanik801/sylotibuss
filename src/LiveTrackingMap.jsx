import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Custom icon URLs
const userIconUrl = "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"; // user/man icon
const busStopIconUrl = "https://img.icons8.com/ios-filled/50/40C057/bus-stop.png"; // bus icon

// Create Leaflet icons for user and bus stop
const userIcon = new L.Icon({
   iconUrl: userIconUrl,
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

const busStopIcon = new L.Icon({
   iconUrl: busStopIconUrl,
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

// Fix Leaflet default icon issue in some build setups (optional now, but keep for fallback)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to set map view to user location
function SetViewToUserLocation({ location }) {
   const map = useMap();
   useEffect(() => {
      if (location) {
         map.setView([location.lat, location.lng], 15);
      }
   }, [location, map]);
   return null;
}

// Component to add routing control to map
function Routing({ from, to }) {
   const map = useMap();

   useEffect(() => {
      if (!from || !to) return;

      const routingControl = L.Routing.control({
         waypoints: [L.latLng(from.lat, from.lng), L.latLng(to.lat, to.lng)],
         lineOptions: { styles: [{ color: "#22c55e", weight: 5 }] }, // green route line
         createMarker: function (i, wp) {
            return L.marker(wp.latLng, {
               draggable: false,
               icon:
                  i === 0
                     ? userIcon // user location icon (man/user)
                     : busStopIcon, // bus stop icon (bus)
            });
         },
         addWaypoints: false,
         routeWhileDragging: false,
         draggableWaypoints: false,
         fitSelectedRoutes: true,
         showAlternatives: false,
      }).addTo(map);

      return () => map.removeControl(routingControl);
   }, [from, to, map]);

   return null;
}

export default function LiveTrackingMap({ userLocation, nearestStopLocation }) {
   return (
      <div className="rounded-lg overflow-hidden shadow-lg ring-2 ring-green-300">
         <MapContainer
            center={userLocation || [24.8949, 91.8687]} // Sylhet fallback
            zoom={15}
            style={{ height: "500px", width: "100%" }}
            scrollWheelZoom={true}
            className="leaflet-container">
            <TileLayer
               attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {userLocation && (
               <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                  <Popup className="bg-green-100 text-green-900 font-semibold rounded-md p-2 shadow-lg">
                     Your Location
                  </Popup>
               </Marker>
            )}

            {nearestStopLocation && (
               <Marker
                  position={[nearestStopLocation.lat, nearestStopLocation.lng]}
                  icon={busStopIcon}>
                  <Popup className="bg-green-100 text-green-900 font-semibold rounded-md p-2 shadow-lg">
                     Nearest Bus Stop
                  </Popup>
               </Marker>
            )}

            <SetViewToUserLocation location={userLocation} />
            {userLocation && nearestStopLocation && (
               <Routing from={userLocation} to={nearestStopLocation} />
            )}
         </MapContainer>
      </div>
   );
}
