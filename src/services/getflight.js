import axios from "axios";

const URL_API = "https://back-airline-production.up.railway.app/vuelos";
export const searchFligths = async (flight = {}) => {
  let urlSearch = `${URL_API}?`;
  for (const key in flight) {
    console.log(`${key}:${flight[key]}`);
    urlSearch = `${urlSearch}${key}=${flight[key]}&`;
    console.log(urlSearch)
  }
  console.log(urlSearch);
  try {
    const { data } = await axios.get(urlSearch);
    return data;
  } catch (error) {
    return [];
  }
};
