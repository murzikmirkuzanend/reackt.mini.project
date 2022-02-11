import {axiosServiceMovies} from "../axios/axios";
import {urls} from "../../urls";


export const moviesService = {

    getAll: (page) => axiosServiceMovies.get(urls.movies(page))
        .then(value => value.data),

    getMoviesById: (id) => axiosServiceMovies.get(urls.moviesId(id))
        .then(value => value.data),


}