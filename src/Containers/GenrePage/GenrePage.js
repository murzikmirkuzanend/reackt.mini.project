import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from 'react-router-dom'
import {getGenres} from "../../slaice";
import GenreBadge from "../../Component/GenreBadge/GenreBadge";

const GenrePage = () => {

    const {genres} = useSelector(store => store.genre);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres(genres))
    }, [])

    return (
        <div>
            {
                genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
            }
            <Outlet/>
            <div>

            </div>
        </div>
    );
};

export default GenrePage;