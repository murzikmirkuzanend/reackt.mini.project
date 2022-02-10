import {axiosServiceMovies} from "../axios/axios";
import {urls} from "../../urls";


export const moviesService ={
    getAll:(page)=>axiosServiceMovies.get(urls.movies(page))
        .then(value => value.data),
// getAllMoviesPages:(page)=> axiosServiceMovies.get(baseURL,{params:{page}})
//     .then(value => value.data)

}