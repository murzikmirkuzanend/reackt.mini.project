import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOneMovie} from "../../slaice";
import {imageUrlW300, imageUrlW500} from "../../urls";

const MovieInfo = () => {

    const {movie} = useSelector(store => store.oneMovie);

    const {
        backdrop_path,
        original_language,
        original_title,
        overview,
        poster_path,
        release_date,
        title
    } = movie;

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getOneMovie(id))

    }, [])

    return (
        <div>
<div>
    <div><h4>{original_title}</h4></div>
    <div><img src={imageUrlW500 + poster_path}alt='poster_path'/></div>
    <div>{overview}</div>
    <div>{release_date}</div>
    <div>{original_language}</div>
    <div>{title}</div>
    <div><img src={imageUrlW300 +backdrop_path} alt='backdrop_path'/> </div>
</div>
        </div>
    );
};

export default MovieInfo;