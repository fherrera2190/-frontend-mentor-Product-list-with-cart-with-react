import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { LoadingSpinner } from "./";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { getRouteBetweenPoints } = useContext(MapContext);

  const [activeId] = useState("");

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const { longitude, latitude } = place.properties.coordinates;
    getRouteBetweenPoints(userLocation, [longitude, latitude]);
  };

  //    const onPlaceClick = (place: Feature) => {
  //     setActiveId(place.id);
  //     const { longitude, latitude } = place.properties.coordinates;
  //     map?.flyTo({
  //       zoom: 15,
  //       center: [longitude, latitude],
  //     });
  //   };

  if (isLoadingPlaces) {
    return <LoadingSpinner />;
  }

  if (places.length === 0) return <></>;

  return (
    <ul className="list-group ">
      {places?.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action ${
            activeId === place.id ? "active" : ""
          }`}
          role="button"
        >
          <h6>{place.properties.name}</h6>
          <p style={{ fontSize: "12px" }}>{place.properties.place_formatted}</p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
