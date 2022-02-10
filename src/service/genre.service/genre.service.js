import genreURL from "../../urls/genre.urls/genre.urls";
import {axiosServiceGenre} from "../axios/axios";


export const genreService = {
    getAll: () => axiosServiceGenre.get(genreURL)
        .then(value => value.data)
}