import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/ReduxCounters/reducers";
import todoListSlice from "../pages/TodoListSearch/reducers";
// import { todoReducer } from "../pages/TodoList/reducers";
import pokemonsSlice from '../pages/DataFetchingReduxToolkit/reducers';

export const rootReducer = combineReducers({
    // todoList: todoReducer,
    todoList: todoListSlice,
});


// точка входа в наш весь reduх
// создает хранилище rootReducer который объединяет все ячейки нашего store