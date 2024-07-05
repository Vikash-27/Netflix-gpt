import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { addNowPlayingMovies } from "../utils/movieSlice"; // Adjust the import path as per your file structure
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            {/* Add other components or UI elements */}
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;
