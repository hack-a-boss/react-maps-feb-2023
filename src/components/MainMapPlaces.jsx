import { Marker } from "react-leaflet";
import { useMapPlaces } from "../hooks/useMapPlaces";

export const MainMapPlaces = () => {
  const { places } = useMapPlaces();

  return (
    <>
      {places.map((place) => {
        return <Marker key={place.id} position={place.position} />;
      })}
    </>
  );
};
