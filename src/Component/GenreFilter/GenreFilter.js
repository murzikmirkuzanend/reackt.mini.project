import React, {useCallback, useEffect} from 'react';
import {useParams,Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getGenresFilter} from "../../slaice/genreSliceFilter/GenreSliceFilter";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

const GenreFilter = () => {


    const {id} = useParams();
    const {results} = useSelector(store => store.genresFilter.genresFilter);
    const page = useSelector(store => store.genresFilter.page);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenresFilter(id, page))
    }, [id,page])

    const forward = useCallback(() => {
        dispatch(getGenresFilter(page + 1))
    }, [page])

    const back = useCallback(() => {
        dispatch(getGenresFilter(page - 1))
    }, [page]);


    return (
        <div>
<div>
    {
        results && results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)
    }
</div>
            <div><Outlet/></div>
            <div>
                <button onClick={back}>BackPage</button>
                <button onClick={forward}>nextPage</button>
            </div>
        </div>
    );
};

export default GenreFilter;