import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <h3>Welcome to you Cinema</h3>

                <NavLink to="/">
                    <button>Home</button>
                </NavLink>
                <NavLink to='/movies'>
                    Movie
                </NavLink>
                <NavLink to="/genres">
                    <button>Genre</button>
                </NavLink>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;