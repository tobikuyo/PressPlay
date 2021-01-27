import axios from "axios";

const instance = axios.create({
    baseURL: "https://press-play-movies.herokuapp.com/api/auth"
});

export default instance;
