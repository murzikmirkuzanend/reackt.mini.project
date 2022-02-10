import React from 'react';
import {imageUrl} from "../../urls";

const MoviesList = ({movie}) => {

    const {backdrop_path, original_title, vote_average} = movie;


    return (
        <div>
            <div>
                <div>
                    <img src={imageUrl + backdrop_path} alt='poster'/>
                </div>
                <div>{original_title}</div>
                <div>{vote_average}</div>

            </div>

        </div>


    );
};

export default MoviesList;