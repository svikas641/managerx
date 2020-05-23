import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsService,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const options={
  disableDefaultUI: true,
  zoomControl: true,
}

const leadData = {
  lat : 43.595310,
  lng: -79.640579
}


const Map = () => {

 const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: "AIzaSyDzxk-4kdmKpoViGp4wWkuludbLtoXKSgU"
});


 if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
     return (
      <div>
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      >
      <Marker
            position={leadData}
        />
        <DirectionsService
            options={{ 
              destination: "Mumbai",
              origin: "Delhi",
              travelMode: "Driving"
            }}
            // required
            
          />
          
                  
            
      </GoogleMap>
      </div>
    );
};

export default Map;