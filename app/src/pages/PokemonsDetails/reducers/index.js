import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPokemonDetails} from "../api";

export const loadPokemonDetails = createAsyncThunk('pokemonDetails/loadPokemonDetails',
    async (id) => {
        const response = await getPokemonDetails(id)
        return response.data;
    })

const initialState = {
    isLoading : false,
    error: null,
    pokemonInfo:{
        name:'',
        stats:[],
    },
}

//далее прописываем про каждое состояние и исход события pending fulfilled rejected
const pokemonDetailSlice = createSlice({
    name: 'pokemonDetails',
    initialState,
    extraReducers: {
        [loadPokemonDetails.pending]: (state)=> {
            state.isLoading = true;
        },
        [loadPokemonDetails.fulfilled]: (state, {payload})=> { // payload - он нужен т.к. придет значение "успешного выполнения"
            state.pokemonInfo.name = payload.name;
            state.pokemonInfo.stats = payload.stats;
            state.isLoading = false;
        },
        [loadPokemonDetails.rejected]: (state, {payload})=> { // payload - он нужен т.к. придет значение "ошибки"
            state.error = payload;
            state.isLoading = false;
        }
    }
})

export default pokemonDetailSlice.reducer;