import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getPokemons} from "../api/config";


const initialState = {
    isLoading: false,
    data: [],
    error: null,
}

export const loadPokemons = createAsyncThunk(
    "pokemons/fetchAll",

    async() => {
        return getPokemons();
    }
);

const pokemonsSlice = createSlice({
    name: "pokemons",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loadPokemons.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadPokemons.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
        });
        builder.addCase(loadPokemons.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });
    },
})

export default pokemonsSlice.reducer;