import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../service";

export const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async () => {
        const genres = await moviesService.getAllGenres();
        return genres
    }
)

const initialState = {
    genres: [],
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    extraReducers: {
        [getGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload.genres
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer