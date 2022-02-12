import React, {useCallback, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {Outlet} from 'react-router-dom'

import {getAllMovies} from "../../slaice";
import MoviesList from "../../Component/MoviesList/MoviesList";


const MoviesPage = () => {

    const {results} = useSelector(store => store.movie.movies);

    const page = useSelector(store => store.movie.page);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies(page))
    }, [page])

    const forward = useCallback(() => {
        dispatch(getAllMovies(page + 1))
    }, [page])

    const back = useCallback(() => {
        dispatch(getAllMovies(page - 1))
    }, [page]);

    return (
        <div>
            <div>
                {
                    results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>

            <div>
                <Outlet/>
            </div>
            <div>

                <button onClick={back}>BackPage</button>
                <button onClick={forward}>nextPage</button>
            </div>

        </div>
    );
};

export default MoviesPage;