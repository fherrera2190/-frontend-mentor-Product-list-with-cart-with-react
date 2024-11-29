import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLoc, getUserLocation } from "../../helpers";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: Props) => {
  const { state, dispatch } = useReducer(placesReducer, INITIAL_STATE);
  useEffect(() => {
    getUserLocation
      .then(([lng, lat]) => {
        dispatch({ type: "setUserLocation", payload: [lng, lat] });
      })
      .catch(() => {});
  }, []);

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
};
