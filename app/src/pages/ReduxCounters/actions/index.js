import { createAction } from "redux-actions";

export const CREATE_COUNTER = createAction('CREATE_COUNTER');
export const DELETE_COUNTER = createAction('DELETE_COUNTER');
export const INCREMET_COUNTER = createAction('INCREMENT_COUNTER');
export const DECREMET_COUNTER = createAction('DECREMENT_COUNTER');
export const RESET_COUNTER = createAction('RESET_COUNTER');
export const REMOVE_ALL = createAction('REMOVE_ALL');