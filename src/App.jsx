import "./App.css";
import "leaflet/dist/leaflet.css";
import { MainMap } from "./components/MainMap";
import { MainMenu } from "./components/MainMenu";

function App() {
  return (
    <main className="app">
      <MainMenu />
      <MainMap />
    </main>
  );
}

export default App;
