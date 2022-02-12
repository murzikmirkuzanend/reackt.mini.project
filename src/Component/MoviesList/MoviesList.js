import React from 'react';
import {imageUrlW300} from "../../urls";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";

const MoviesList = ({movie}) => {

    const {id, backdrop_path, original_title, vote_average} = movie;


    return (
        <div>

            <div>
                <NavLink to={id.toString()} state={movie}>

                    <div>
                        <img src={imageUrlW300 + backdrop_path} alt='poster'/>
                    </div>
                    <div>{original_title}</div>
                    <div>{vote_average}</div>
                    
                </NavLink>

            </div>

        </div>


    );
};

export default MoviesList;