import React from 'react';
import MoviesPage from "./Containers/MoviesPage/MoviesPage";
import {Route, Routes} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import MovieInfo from "./Component/MovieInfo/MovieInfo";
import GenrePage from "./Containers/GenrePage/GenrePage";
import HomePage from "./Containers/HomePage/HomePage";
import GenreFilter from "./Component/GenreFilter/GenreFilter";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/movies"} element={<MoviesPage/>}/>
                    <Route path={'/genres'} element={<GenrePage/>}>
                        <Route path={':id'} element={<GenreFilter/>}>
                            <Route path={':id'} element={<MovieInfo/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
            </Routes>


        </div>
    )
        ;
};

export default App;