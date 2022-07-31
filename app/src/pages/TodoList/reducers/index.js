import { handleActions } from "redux-actions";
import { v4 as uuid } from 'uuid';

import * as actions from '../actions'

const defaultState = {
    lists: [],
}
// здесь я прописываю логику для приложения
export const formManagerReducer = handleActions({
        [actions.CREATE_FORM]: (state) => {
            const formCopy = [...state.lists];

            const newForm = {
                id: uuid(),
                countValue: 0
            };

            formCopy.push(newForm);

            return {
                ...state,
                lists: formCopy,
            };
        },

        [actions.EDIT_FORM]: (state, {payload: id}) => {
            const formCopy = [...state.lists];

        },

        [actions.DELETE_FORM]: ((state, { payload: id}) => {
            const formCopy = [...state.lists];

            const formIndextoRemove = formCopy.filter(
                (list) => list.id !== id
            )
            return {
                lists: formCopy
            }
        }),
    },
    defaultState)