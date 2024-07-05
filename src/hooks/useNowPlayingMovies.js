import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () =>
{
    const dispatch = useDispatch();

    const nowPlayingMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    };

    useEffect(() => {
        nowPlayingMovies();
    }, []);


}

export default useNowPlayingMovies;