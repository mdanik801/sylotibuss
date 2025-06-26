import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Custom icon URLs
const userIconUrl = "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
const busStopIconUrl = "https://img.icons8.com/ios-filled/50/40C057/bus-stop.png";

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

// Optional fallback for default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function SetViewToUserLocation({ location }) {
   const map = useMap();
   useEffect(() => {
      if (location) {
         map.setView([location.lat, location.lng], 15);
      }
   }, [location, map]);
   return null;
}

function ResizeMapOnLoad() {
   const map = useMap();
   useEffect(() => {
      setTimeout(() => {
         map.invalidateSize();
      }, 300);
   }, [map]);
   return null;
}

function Routing({ from, to }) {
   const map = useMap();

   useEffect(() => {
      if (!from || !to) return;

      const routingControl = L.Routing.control({
         waypoints: [L.latLng(from.lat, from.lng), L.latLng(to.lat, to.lng)],
         lineOptions: { styles: [{ color: "#22c55e", weight: 5 }] },
         createMarker: function (i, wp) {
            return L.marker(wp.latLng, {
               draggable: false,
               icon: i === 0 ? userIcon : busStopIcon,
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
      <div className="w-full h-full">
         <MapContainer
            center={userLocation || [24.8949, 91.8687]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%", minHeight: "300px" }}
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
            <ResizeMapOnLoad />
            {userLocation && nearestStopLocation && (
               <Routing from={userLocation} to={nearestStopLocation} />
            )}
         </MapContainer>
      </div>
   );
}
