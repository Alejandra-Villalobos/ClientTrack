import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { clients } from "../mock/clients";

function ClientsMap() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");
  
  const position = { lat: 13.6914, lng: -88.8821 };
  const [open, setOpen] = useState(false);
  const [clientData, setClientData] = useState({});

  //Open InfoWindow when clicking on a marker
  const handleOpen = (client) => {
    setOpen(true);
    setClientData(client);
  };

  //Redirect to login if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <APIProvider apiKey="AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE">
      <div style={{ width: "100vw", height: "93vh" }}>
        <Header />
        <Map defaultZoom={9} defaultCenter={position}>
          {clients.map((client, index) => (
            <Marker
              key={index}
              position={{ lat: client.lat, lng: client.long }}
              onClick={() => handleOpen(client)}
            />
          ))}
          {open && (
            <InfoWindow
              position={{ lat: clientData.lat, lng: clientData.long }}
              onCloseClick={() => setOpen(false)}
            >
              <p>{clientData.name}</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default ClientsMap;
