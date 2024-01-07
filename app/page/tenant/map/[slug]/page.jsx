"use client";

import { useState, useEffect } from "react";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/table.module.css";
import BackNavigation from "@/app/components/navigation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map({ params }) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            params.slug
          )}&key=YOUR_GOOGLE_MAPS_API_KEY`
        );

        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [params.slug]);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className={styles.tableInfo}>
      <NavBar />
      <BackNavigation />
      <div>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={coordinates}
            zoom={15}
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

