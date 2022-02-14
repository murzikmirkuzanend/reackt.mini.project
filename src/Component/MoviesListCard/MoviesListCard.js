import React from 'react';
import {NavLink} from "react-router-dom";
import {imageUrlW300} from "../../urls";


const MoviesListCard = ({movie}) => {

    const {id, poster_path, original_title, vote_average} = movie;


    return (
        <div>
            <NavLink to={id.toString()} state={movie}>
                <div><img src={imageUrlW300 + poster_path} alt="poster"/></div>

                <div>

                    <div>{original_title}</div>


                    <div>{vote_average}</div>
                </div>
            </NavLink>

        </div>
    );
}

export  {MoviesListCard};