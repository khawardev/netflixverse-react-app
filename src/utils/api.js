import axios from 'axios';
const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const response = await axios?.get(BASE_URL + url, { headers, params, });
        return response?.data;
    } catch (error) {
        console.log("Error in fetching API: ", error);
        throw error;
    }
};
