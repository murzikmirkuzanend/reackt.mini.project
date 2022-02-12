import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../service";

const initialState = {
    movies: [],
    page: 1
}

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page) => {
        const moviesAll = await moviesService.getAll(page);
        return moviesAll
    }
)
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
            state.page = action.payload.page
        },
    }
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer