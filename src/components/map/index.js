import { useState } from "react";
import MapGL from "react-map-gl";

const Map = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY29ubm9yYmFpbGVzIiwiYSI6ImNrNmlkb3VqMDE2dWozbW9lOTF5dGR5ODgifQ.Y28207gCv_BE6OEo9zL3Gw"; // Set your mapbox token here
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};
export default Map;
