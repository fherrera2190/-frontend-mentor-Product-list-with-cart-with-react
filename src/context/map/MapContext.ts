import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;

  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
  setMap: (map: Map) => void;
}

export const MapContext = createContext({} as MapContextProps);
