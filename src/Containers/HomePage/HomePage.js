import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../slaice";
import MoviesList from "../../Component/MoviesList/MoviesList";


const HomePage = () => {

    const {results} = useSelector(store => store.movie.movies);

    console.log(results);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(1))
    }, [])



    return (
        <div>
            {
                results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)

            }
        </div>
    );
};

export default HomePage;