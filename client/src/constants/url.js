const API_KEY = process.env.REACT_APP_API_KEY;

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const TRENDING_URL = `/trending/movie/day?api_key=${API_KEY}`;
export const POPULAR_URL = `/movie/popular?api_key=${API_KEY}`;
export const TOP_RATED_URL = `/movie/top_rated?api_key=${API_KEY}`;
export const NOW_PLAYING_URL = `/movie/now_playing?api_key=${API_KEY}`;
