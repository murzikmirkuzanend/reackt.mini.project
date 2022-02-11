import React from 'react';
import MoviesPage from "./Containers/MoviesPage/MoviesPage";
import {Route, Routes} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import MovieInfo from "./Component/MovieInfo/MovieInfo";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MovieInfo/>}/>

                </Route>
            </Routes>


        </div>
    );
};

export default App;