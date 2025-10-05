import axios from "axios";

export const TMDB = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`   
    }
}

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query
        ? `${TMDB.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB.BASE_URL}/movie/popular`;
    try {
        const response = await axios.get(`${endpoint}`, {
            params: {
                api_key: TMDB.API_KEY,
                ...(query ? { query } : {})
            },
            headers: TMDB.headers
        });

        if(!response.data) {
            throw new Error("No data found: " + response.statusText);
        }

        return response.data;

    } catch(error) {
        throw new Error("Failed to fetch data from TMDB: " + error);
    }
};
