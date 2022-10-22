// import React from "react";

// // google map api
// import { useJsApiLoader, GoogleMap,Marker } from "@react-google-maps/api";

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const GoogleApi = () => {

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyADiGl55OY99-SmefvJeRFHHca2qCPUUtI",
//     libraries: ['places']
//   });

//   // const [map, setMap] = useState(null);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={{width: "300px", height: "300px"}}
//       center={center}
//       zoom={10}
//         // onLoad={onLoad}
//         // onUnmount={onUnmount}
//     >
//         <Marker position={center}/>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// };

// export default GoogleApi;
