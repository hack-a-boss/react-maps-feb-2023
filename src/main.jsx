import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlacesContextProvider } from "./context/PlacesContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlacesContextProvider>
      <App />
    </PlacesContextProvider>
  </React.StrictMode>
);
