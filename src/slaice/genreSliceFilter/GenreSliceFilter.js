import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../service";


export const getGenresFilter = createAsyncThunk(
    'genresFilterSlice/getGenresFilter',
    async (id, page) => {
        const getFilter = await moviesService.getGenreById(id, page)
        return getFilter
    }
)


const initialState = {
    genresFilter: [],
    page: 1
}
const genresFilterSlice = createSlice({
    name: 'genresFilterSlice',
    initialState,
    extraReducers: {
        [getGenresFilter.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genresFilter = action.payload;
            state.page = action.payload.page
        }
    }
})
const genresFilterReducer = genresFilterSlice.reducer;

export default genresFilterReducer