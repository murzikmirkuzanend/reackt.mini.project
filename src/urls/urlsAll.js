import {apiKey} from "../service";


export const urlsAll = {
    movies: (page) => `/discover/movie?api_key=${apiKey}&page=${page}`,

    moviesId: (id) => `/movie/${id}?api_key=${apiKey}`,

        genres: `/genre/movie/list?api_key=${apiKey}`,

    genresId: (id, page) => `/discover/movie?&language=uk-UK&api_key=${apiKey}&with_genres=${id}&page=${page}`


}

