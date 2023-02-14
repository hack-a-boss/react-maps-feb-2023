import { useMapPlaces } from "../hooks/useMapPlaces";

export const MainMenu = () => {
  const { places, removePlace } = useMapPlaces();

  return (
    <header className="main-menu">
      <h1>Mis lugares</h1>

      {places.length ? (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <h2>{place.name}</h2>
              <button
                onClick={() => {
                  if (window.confirm("Seguro?")) removePlace(place.id);
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ningún lugar guardado.</p>
      )}

      <button>Añadir nuevo lugar</button>
    </header>
  );
};
