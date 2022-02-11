import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../../slaice/movies.slaice/movies.slaice";
import movieReducer from "../../slaice/movieSlice/movieSlice";


const store = configureStore({
    reducer: {
        movie: moviesReducer,
        oneMovie: movieReducer

    }
})
export default store