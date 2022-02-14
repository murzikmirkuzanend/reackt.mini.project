import React from 'react';
import {NavLink} from "react-router-dom";

import './GenreBadge.css'

const GenreBadge = ({genre: {id, name}}) => {

    return (
        <div className={'genreFilterID'}>
            <NavLink to={id.toString()}>

                <div >{name}</div>
            </NavLink>
        </div>
    );
};

export {GenreBadge};