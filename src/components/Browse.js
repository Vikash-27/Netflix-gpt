import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import {addNowPlayingMovies} from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const Browse = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[])

    return <div>
      <Header/>
</div>;
  };
  export default Browse;