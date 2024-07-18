import React, { useState, useEffect, useRef } from "react";
import {
  APIProvider,
  Map,
  useGoogleMap,
} from "@vis.gl/react-google-maps";
import Header from "../components/Header";
import { clients } from "../mock/clients";

function HeatMap() {
  const position = { lat: 13.6914, lng: -88.8821 };
  const heatmapLayerRef = useRef(null);

  useEffect(() => {
    if (heatmapLayerRef.current) {
      const data = clients.map((client) => new window.google.maps.LatLng(client.lat, client.long));
      heatmapLayerRef.current.setData(data);
    }
  }, []);

  return (
    <APIProvider apiKey="AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE">
      <div style={{ width: "100vw", height: "93vh" }}>
        <Header />
        <Map
          defaultZoom={9}
          defaultCenter={position}
          onLoad={(map) => {
            heatmapLayerRef.current = new window.google.maps.visualization.HeatmapLayer({
              data: clients.map(client => new window.google.maps.LatLng(client.lat, client.long)),
              map: map,
            });
          }}
        />
      </div>
    </APIProvider>
  );
}

export default HeatMap;
