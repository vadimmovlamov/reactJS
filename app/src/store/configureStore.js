import { configureStore } from '@reduxjs/toolkit';
import todoList from '../pages/TodoListSearch/reducers';
// import { rootReducer } from './rootReducer';
import pokemonsSlice from '../pages/DataFetchingReduxToolkit/reducers';
import pokemonDetailSlice from '../pages/PokemonsDetails/reducers';
import { countersManagerReducer } from '../pages/ReduxCounters/reducers';


export const store = configureStore({
  reducer: {
    todoList,
    pokemons: pokemonsSlice,
    countersManager: countersManagerReducer,
    pokemonDetail: pokemonDetailSlice,
  },
})






// ранняя интерпретация кода, без redux toolkit

/* import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducer";

export function configureStore() { // configureStore отвечает за конфигурацию нашего конструктора
    return legacy_createStore(rootReducer, composeWithDevTools());
} */