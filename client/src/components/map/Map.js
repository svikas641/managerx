import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsService,
} from "@react-google-maps/api";
import { connect } from "react-redux";
import { getPendingLeads } from "../../actions/lead";

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const leadData = [
  {
    finalStatus: "pending",
    _id: "5eb7bb2f8d3f3a11c85992f8",
    user: "5eb7bac08d3f3a11c85992f7",
    companyName: "Singh Enterprises",
    clientName: "Arjun singh",
    clientEmail: "vikasgrowthfile@gmail.com",
    clientPhoneNumber: 7788991122,
    clientAddress: "Bangalore, kt",
    lat: 20.932,
    lng: 77.7523,
    pincode: 765356,
    salesPerson: "Vikas",
  },
  {
    finalStatus: "pending",
    _id: "5eb7bd9d8d3f3a11c85992fc",
    user: "5eb7bac08d3f3a11c85992f7",
    companyName: "Tomar Industires",
    clientName: "Ajay Tomar",
    clientEmail: "vikasgrowthfile@gmail.com",
    clientPhoneNumber: 7788991122,
    clientAddress: "Bangalore, kt",
    lat: 19.1383,
    lng: 77.321,
    pincode: 765356,
    salesPerson: "Vikas",
  },
  {
    finalStatus: "pending",
    _id: "5eb801a6f6bafd1114262fdd",
    user: "5eb7bac08d3f3a11c85992f7",
    companyName: "Ramesh Lubricants",
    clientName: "ramesh chopra",
    clientEmail: "vikasgrowthfile@gmail.com",
    clientPhoneNumber: 7788991122,
    clientAddress: "Bangalore, kt",
    lat: 19.9615,
    lng: 79.2961,
    pincode: 765356,
    salesPerson: "Vikas",
  },
];

console.log();

const Map = ({ getPendingLeads, lead: { leads, loading } }) => {
  useEffect(() => {
    getPendingLeads();
  }, [getPendingLeads]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDzxk-4kdmKpoViGp4wWkuludbLtoXKSgU",
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
        {leadData.map((leadData) => (
          <Marker
            key={leadData._id}
            position={{
              lat: leadData.lat,
              lng: leadData.lng,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lead: state.lead,
});

export default connect(mapStateToProps, { getPendingLeads })(Map);
