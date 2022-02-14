import {axiosServiceMovies} from "../axios/axios";
import {urlsAll} from "../../urls";

export const moviesService = {

    getAll: (page) => axiosServiceMovies.get(urlsAll.movies(page))
        .then(value => value.data),

    getMoviesById: (id) => axiosServiceMovies.get(urlsAll.moviesId(id))
        .then(value => value.data),

    getAllGenres: () => axiosServiceMovies.get(urlsAll.genres)
        .then(value => value.data),

    getGenreById: (id, page) => axiosServiceMovies.get(urlsAll.genresId(id, page))
        .then(value => value.data)
}