import axios from "axios";

const page = Math.ceil(Math.random() * 3);

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: process.env.REACT_APP_API_KEY, page }
});

export default instance;
