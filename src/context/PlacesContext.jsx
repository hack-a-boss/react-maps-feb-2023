import { createContext, useEffect, useState } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
  const localData = localStorage.getItem("places");

  const [places, setPlaces] = useState(localData ? JSON.parse(localData) : []);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  return (
    <PlacesContext.Provider
      value={{
        places,
        setPlaces,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
