import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export {Layout};