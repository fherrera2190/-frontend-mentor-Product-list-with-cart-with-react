import { MapContext, PlacesContext } from "../context";
import { Loading } from "./";
import { useContext, useLayoutEffect, useRef } from "react";
import { Map } from "mapbox-gl";
export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading && mapDiv.current) {
      const map = new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: userLocation,
        zoom: 15,
      });

      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div
        ref={mapDiv}
        style={{
          height: "100vh",
          width: "100vw",
          left: 0,
          position: "fixed",
          top: 0,
        }}
      ></div>
      {userLocation?.join(", ")}
    </div>
  );
};
