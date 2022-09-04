import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from '../../../api/config'

const initialState = {
    isLoading: false,
    pokemons: [],
    error: null,
}

export const loadPokemons = createAsyncThunk(
    'pokemons/fetchAll',
    async(someArg) => {
        console.log(someArg);
        const response = await api.get('/pokemons');

        return response.pokemons;
    }
)

const pokemonsSlice = createSlice({
    name: 'pokemons',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loadPokemons.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loadPokemons.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.pokemons = payload;
        })
        builder.addCase(loadPokemons.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
})

export default pokemonsSlice.reducer;