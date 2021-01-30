import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie",
    params: { api_key: process.env.REACT_APP_API_KEY, include_adult: false }
});

export default instance;
