import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../slaice";
import {MoviesList} from "../../Component";

import './HomePage.css'

const HomePage = () => {

    const {results} = useSelector(store => store.movie.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [])


    return (
        <div className={'homePage'}>
            <div className={'results'}>
                {
                    results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)

                }
            </div>
            <div className={'bottom'}>.</div>
        </div>
    );
};

export {HomePage};