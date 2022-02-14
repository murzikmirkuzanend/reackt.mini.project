import React, {useCallback, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {Outlet} from 'react-router-dom'

import {getAllMovies} from "../../slaice";
import {MoviesList} from "../../Component";

import './MoviesPage.css'

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
        <div className={'moviePage'}>
            <div className={'resultsPage'}>
                {
                    results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>

            <div>
                <Outlet/>
            </div>
            <div className={'bottomMovies'}>

                <button onClick={back}><span>Back Page</span>
                    <div className="liquid"></div></button>
                <button onClick={forward}><span>Forward Page</span>
                    <div className="liquid"></div></button>
            </div>
            <div className={'bottomPage'}>.</div>

        </div>
    );
};

export  {MoviesPage};