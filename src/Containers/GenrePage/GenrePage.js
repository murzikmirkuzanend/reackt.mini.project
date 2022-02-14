import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from 'react-router-dom'
import {getGenres} from "../../slaice";
import {GenreBadge} from "../../Component";
import './GenerPage.css'

const GenrePage = () => {

    const {genres} = useSelector(store => store.genre);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres(genres))
    }, [])

    return (
        <div className={'genrePagePhaser'}>
            <div className={'genrePage'}>
                {
                    genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                }
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>

        </div>
    );
};

export {GenrePage};