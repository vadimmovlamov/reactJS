import { createAction } from "redux-actions";

export const CREATE_FORM = createAction('CREATE_FORM');
export const EDIT_FORM = createAction('EDIT_FORM'); //применение изменений которые перенесли в edit
export const DELETE_FORM = createAction('DELETE_FORM');
export const COMPLETE_FORM = createAction('COMPLETE_FORM');
export const TOGGLE_FORM = createAction('TOGGLE_FORM'); // action для переключения режима редактирования в режим чтения