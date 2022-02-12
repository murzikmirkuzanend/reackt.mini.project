import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "../../slaice/movies.slaice/movies.slaice";
import movieReducer from "../../slaice/movieSlice/movieSlice";
import genresReducer from "../../slaice/genre.slaice/genre.slaice";
import genresFilterReducer from "../../slaice/genreSliceFilter/GenreSliceFilter";


const store = configureStore({
    reducer: {
        movie: moviesReducer,
        oneMovie: movieReducer,
        genre: genresReducer,
        genresFilter: genresFilterReducer

    }
})
export default store