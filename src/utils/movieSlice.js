// moviesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        removeMovie: (state, action) => {
            // Implement remove movie logic if needed
            return null;
        }
    }
});

export const { addNowPlayingMovies, removeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
