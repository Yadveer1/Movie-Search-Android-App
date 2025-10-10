import axios from "axios";

export const TMDB = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`   
    }
}

const api = axios.create({
  baseURL: TMDB.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...TMDB.headers
  },
  params: {
    api_key: TMDB.API_KEY
  }
});

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query ? '/search/movie' : '/movie/popular';
    try {
        const response = await api.get(endpoint, {
            params: query ? { query } : {}
        });

        if(!response.data) {
            throw new Error("No data found: " + response.statusText);
        }

        return response.data;

    } catch(error) {
        throw new Error("Failed to fetch data from TMDB: " + error);
    }
};

export const fetchMovieDetails = async (id: string) => {
    try{
        const response = await api.get(`/movie/${id}`);
        
        if(!response.data) {
            throw new Error("No data found: " + response.statusText);
        }

        return response.data;
    } catch(error) {
        throw new Error("Failed to fetch movie Details from TMDB: " + error);
    }
}