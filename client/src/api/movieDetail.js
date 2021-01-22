import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: { api_key: process.env.REACT_APP_API_KEY, language: "en-US" }
});

export default instance;
