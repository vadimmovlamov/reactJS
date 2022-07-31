import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/ReduxCounters/reducers";
import { formManagerReducer } from "../pages/TodoList/reducers";

export const rootReducer = combineReducers({
    countersManager: countersManagerReducer,
    formManager: formManagerReducer,
});


// точка входа в наш весь reduх
// создает хранилище rootReducer который объединяет все ячейки нашего store