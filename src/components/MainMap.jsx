import { MapContainer, TileLayer } from "react-leaflet";
import { DefaultCenter, DefaultZoom } from "../config";
import { MainMapPlaces } from "./MainMapPlaces";

export const MainMap = () => {
  return (
    <section className="main-map">
      <MapContainer center={DefaultCenter} zoom={DefaultZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <MainMapPlaces />
      </MapContainer>
    </section>
  );
};
