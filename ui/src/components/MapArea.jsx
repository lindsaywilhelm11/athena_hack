import { useState } from 'react';
import GoogleMapReact from "google-map-react";
import { SearchBar } from './SearchBar';

export function MapArea() {
  const [addressText, setAddressText] = useState("");
  const [latLng, setLatLng] = useState({});
  const [markers, setMarkers] = useState([]);

  return <>
    <SearchBar
      addressText={addressText}
      setAddressText={setAddressText}
      setLatLng={setLatLng}
    />
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDi1mLA2I4WvGNgkvPG9_SK4zbltWu_kcQ" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={11}
      >
        <p lat={0} lng={0}>hello</p>
      </GoogleMapReact>
    </div>
  </>
}
