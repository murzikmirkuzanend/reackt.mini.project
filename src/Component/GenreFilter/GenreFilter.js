import React, {useCallback, useEffect} from 'react';
import {useParams, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getGenresFilter} from "../../slaice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import './GenreFilter.css'

const GenreFilter = () => {


    const {id} = useParams();
    const {results} = useSelector(store => store.genresFilter.genresFilter);
    const page = useSelector(store => store.genresFilter.page);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenresFilter(id, page))
    }, [id, page])

    const forward = useCallback(() => {
        dispatch(getGenresFilter({id, page: page + 1}))
    }, [page])

    const back = useCallback(() => {
        dispatch(getGenresFilter({id, page: page - 1}))
    }, [page]);


    return (
        <div className={'genreFilter'}>
            <div >
                <div className={'genreFilterIdOne'}>
                    {
                        results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                    }
                </div>

               <Outlet/>
            </div>
            <div className={'genreButton'}>
                <button onClick={back}><span>Back Page</span>
                    <div className="liquid"></div></button>
                <button onClick={forward}><span>Forward Page</span>
                    <div className="liquid"></div></button>
            </div>
            <div className={'bottomGenre'}> .</div>
        </div>
    );
};

export {GenreFilter};