import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../../slaice/movies.slaice/movies.slaice";


const store = configureStore({
    reducer: {
        movie: moviesReducer

    }
})
export default store