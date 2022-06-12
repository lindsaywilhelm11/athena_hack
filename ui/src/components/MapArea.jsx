import { useState, useEffect } from 'react';
import GoogleMapReact from "google-map-react";
import { SearchBar } from './SearchBar';
import MarkerImg from "../../resources/location-icon.svg"
import { getMarkerPositions } from './functions/map';

const UK_POS = { lat: 54.3555, lng: -5 }

export function MapArea() {
  const [addressText, setAddressText] = useState("");
  const [latLng, setLatLng] = useState({});
  const [markers, setMarkers] = useState([UK_POS]);

  useEffect(() => {
    setMarkers(getMarkerPositions())
  }, [setMarkers]);

  return <>
    <SearchBar
      addressText={addressText}
      setAddressText={setAddressText}
      setLatLng={setLatLng}
    />
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDi1mLA2I4WvGNgkvPG9_SK4zbltWu_kcQ" }}
        defaultCenter={UK_POS}
        defaultZoom={6}
      >
        {markers.map((({ lat, lng }) =>
          // <img
          //   key={Math.random()}
          //   lat={lat}
          //   lng={lng}
          //   src="../../resources/location-icon.svg"
          //   width={40}
          //   fill="#FFFFFF"
          //   style={{ backgroundColor: "white", fill: "white" }}
          // />
          <img
            src={MarkerImg}
            key={Math.random()}
            width={40}
            lat={lat}
            lng={lng}
            style={{ transform: "translate(-50%, -50%" }}
          />
          // <svg
          //   key={Math.random()}
          //   lat={lat}
          //   lng={lng}
          //   viewBox="0 0 349.661 349.661"
          // >
          //   <g>
          //     <path d="M174.831,0C102.056,0,42.849,59.207,42.849,131.981c0,30.083,21.156,74.658,62.881,132.485   c30.46,42.215,61.363,76.607,61.671,76.95l7.429,8.245l7.429-8.245c0.309-0.342,31.211-34.734,61.671-76.95   c41.725-57.828,62.881-102.402,62.881-132.485C306.812,59.207,247.605,0,174.831,0z M174.83,319.617   c-37.058-42.692-111.98-139.048-111.98-187.636C62.849,70.235,113.084,20,174.831,20s111.981,50.235,111.981,111.981   C286.812,180.54,211.888,276.915,174.83,319.617z" />
          //     <circle cx="174.831" cy="131.982" r="49.696" />
          //   </g>
          // </svg>
        ))}
      </GoogleMapReact>
    </div>
  </>
}
