import React from 'react';
import {NavLink} from "react-router-dom";

const GenreBadge = ({genre: {id, name}}) => {

    return (
        <div>
            <NavLink to={id.toString()}>

                <div>{name}</div>
            </NavLink>
        </div>
    );
};

export default GenreBadge;