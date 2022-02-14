import React from 'react';
import {imageUrlW300} from "../../urls";
import {NavLink} from "react-router-dom";

const MoviesList = ({movie}) => {

    const {id, poster_path, original_title, vote_average} = movie;


    return (
        <div>

            <div>
                <NavLink to={id.toString()} state={movie}>

                    <div>
                        <img src={imageUrlW300 + poster_path} alt='poster'/>
                    </div>
                    <div>{original_title}</div>
                    <div>{vote_average}</div>
                </NavLink>

            </div>

        </div>


    );
};

export  {MoviesList};