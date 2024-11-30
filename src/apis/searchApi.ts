import axios from "axios";

export const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6",
  params: {
    limit: 5,
    language: "es",
    access_token: import.meta.env.VITE_MAPBOX_KEY,
  },
});

export default searchApi;
