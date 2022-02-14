import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <div>
            <div className={'headerPhaser'}>
                <h3 className={'h3'}>Welcome to you Cinema</h3>

                <NavLink to="/" className={'home'}>
                    Home
                </NavLink>
                <NavLink to='/movies' className={'movie'}>
                    Movie
                </NavLink>
                <NavLink to="/genres" className={'genre'}>
                    Genre
                </NavLink>

                <div className='search'><input className='search-inp' type="search" placeholder='search...'/></div>

            </div>

            <div>
<hr/>
            </div>
        </div>
    );
};

export {Header};