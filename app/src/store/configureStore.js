import { configureStore } from '@reduxjs/toolkit';
import todoList from '../pages/TodoListSearch/reducers';
// import { rootReducer } from './rootReducer';


export const store = configureStore({
  reducer: {
    todoList,
  },
})






// ранняя интерпретация кода, без redux toolkit

/* import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./rootReducer";

export function configureStore() { // configureStore отвечает за конфигурацию нашего конструктора
    return legacy_createStore(rootReducer, composeWithDevTools());
} */