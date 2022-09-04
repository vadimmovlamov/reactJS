// прописываем всю логику приложения. Что должно произойти на каждый конкретный Action
/* в данном reducers все переделано под redux toolkuit */
import { createSlice } from "@reduxjs/toolkit";
import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";
import * as actions from "../actions";

const defaultState = {
    todos: [],
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: defaultState,
    reducers: {
        createTodo: (state, {payload: todoText}) => {
            const todoItem = {
                id: uuid(),
                text: todoText,
                isCompleted: false,
                isEditMode: false,
            }
            state.todos.unshift(todoItem)
        },

        toggleTodo: (state, {payload: id}) => {
            const foundTodo = state.todos.find((todo) => todo.id === id);
            foundTodo.isEditMode = !foundTodo.isEditMode; //меняем состояние 
        },

        editTodo: (state, {payload}) => {
            const {id, updateText} = payload;
            const foundTodo = state.todos.find((todo) => todo.id === id);
            foundTodo.text = updateText; //присвоили новое значение обновленного текста
            foundTodo.isEditMode = false; //выключили режим редактирования
        },

        completeTodo: (state, {payload: id}) => {
            const foundTodo = state.todos.find((todo) => todo.id === id);
            foundTodo.isCompleted = true;
        },

        deleteTodo: (state, {payload: id}) => {
            const todoIndexToRemove = state.todos.findIndex((todo) => todo.id === id);
            state.todos.splice(todoIndexToRemove, 1)
        },
    }
})

export const { createTodo, toggleTodo, editTodo, completeTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;