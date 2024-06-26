import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { addNowPlayingMovies } from "../utils/movieSlice"; // Adjust the import path as per your file structure
import { useDispatch } from "react-redux";

const Browse = () => {
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

    return (
        <div>
            <Header />
            {/* Add other components or UI elements */}
        </div>
    );
};

export default Browse;
