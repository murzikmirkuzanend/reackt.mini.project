import {apiKey} from "../service";


const baseURL = 'https://api.themoviedb.org/3'

export default baseURL

export const urls ={
    movies:(page)=>`/discover/movie?api_key=${apiKey}&page=${page}`,

    moviesId:(id)=>`/movie/${id}?api_key=${apiKey}`,

}
