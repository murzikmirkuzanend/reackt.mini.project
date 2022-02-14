import {apiKey} from "../service";


export const urlsAll = {
    movies: (page) => `/discover/movie?api_key=${apiKey}&language=uk-UK&page=${page}`,

    moviesId: (id) => `/movie/${id}?api_key=${apiKey}&language=uk-UK`,

        genres: `/genre/movie/list?api_key=${apiKey}&language=uk-UK`,

    genresId: (id, page) => `/discover/movie?&api_key=${apiKey}&language=uk-UK&with_genres=${id}&page=${page}`,



}

