import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../service";


const initialState = {
    movie: []
}


export const getOneMovie = createAsyncThunk(
    'movieSlice/getOneMovie',
    async (id) => {
        const oneMovie = await moviesService.getMoviesById(id)
        return oneMovie
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: {
        [getOneMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movie = action.payload

        }
    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer