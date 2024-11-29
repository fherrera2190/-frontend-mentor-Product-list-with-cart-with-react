import { MapProvider, PlacesProvider } from "./context";
import { HomePage } from "./screens";
import "./styles.css";
export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  );
};
