import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  HeatmapLayer,
  useJsApiLoader,
} from "@react-google-maps/api";
import Header from "../components/Header";
import { clients } from "../mock/clients";
import { useNavigate } from "react-router-dom";

function HeatMap() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE",
    libraries: ["visualization"],
  });
  const position = { lat: 13.6914, lng: -88.8821 };

  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <div style={{ width: "100vw", height: "93vh" }}>
      <Header />

      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={position}
        zoom={9}
        onLoad={(map) => setMap(map)}
      >
        {map && (
          <HeatmapLayer
            data={clients.map((client) => ({
              location: new window.google.maps.LatLng(client.lat, client.long),
              weight: 1,
            }))}
            options={
              {
                radius: 20,
              }
            }
          />
        )}
      </GoogleMap>
    </div>
  );
}

export default HeatMap;
