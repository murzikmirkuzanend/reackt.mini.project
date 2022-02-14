import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css'
import {GenreFilter, Layout, MovieInfo} from "./Component";
import {GenrePage, HomePage, MoviesPage} from "./Containers";
import DownInfo from "./Component/DownInfo/DownInfo";


const App = () => {
    return (
        <div className={'app'}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/movies"} element={<MoviesPage/>}/>
                    <Route path={'/genres'} element={<GenrePage/>}>
                        <Route path={':id'} element={<GenreFilter/>}>
                        </Route>
                    </Route>
                </Route>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
                <Route path={'/genres/:id/:id'} element={<MovieInfo/>}/>
                <Route path={'/:id'} element={<MovieInfo/>}/>
            </Routes>

            <div className={'down'}>
                <DownInfo/>
            </div>
        </div>
    )
        ;
};

export default App;