import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getOneMovie} from "../../slaice";
import {imageUrlW500} from "../../urls";
import StarRating from "../StarsRating/StarRating";
import {Header} from "../Header/Header";
import './MovieInfo.css'

const MovieInfo = () => {

    const {movie} = useSelector(store => store.oneMovie);

    const {
        original_language,
        original_title,
        overview,
        poster_path,
        release_date,
        title,
        genres
    } = movie;

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getOneMovie(id))

    }, [])

    return (
        <div>
            <Header/>
            <div className={'movieInfo'}>
                <div>{title}</div>
                <div className={'allText'}>
                    <div><img src={imageUrlW500 + poster_path} alt='poster_path'/></div>
                    <div> {genres && genres.map(value => <div> {value.name} </div>)}</div>
                    <div>{overview}</div>
                    <div>
                        <div className={'stars'}>
                            <StarRating/>
                        </div>
                        <div className={'h4'}><h4>{original_title}</h4>
                            <div>{release_date}</div>
                            <div>{original_language}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};