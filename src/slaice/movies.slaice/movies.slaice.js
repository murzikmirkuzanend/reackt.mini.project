import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../service";

const initialState = {
    movies: [],
    page: 1
}

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page) => {
        const movies = await moviesService.getAll(page);
        return movies
    }
)
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducer: {},
    extraReducers: {
        [getAllMovies.pending]: (state) => {

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
            state.page = action.payload.page
        },
        [getAllMovies.rejected]: (state, action) => {

        }

    }
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer