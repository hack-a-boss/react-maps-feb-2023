import { nanoid } from "nanoid";
import { useContext } from "react";
import { PlacesContext } from "../context/PlacesContext";

export const useMapPlaces = () => {
  const { places, setPlaces } = useContext(PlacesContext);

  // Funciones que modifiquen los datos de arriba (TODO)
  const addPlace = ({ name, description, position }) => {
    setPlaces([
      ...places,
      {
        id: nanoid(),
        name,
        description,
        position,
      },
    ]);
  };

  const removePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  return {
    places,
    setPlaces,
    addPlace,
    removePlace,
  };
};
