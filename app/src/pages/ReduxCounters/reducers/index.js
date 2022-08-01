import { handleActions } from "redux-actions";
import { v4 as uuid } from 'uuid';

import * as actions from '../actions';

const defaultState = {
    counters: [],
}

export const countersManagerReducer = handleActions({
        // ключом будет наш actions.CREATE_COUNTER а значением будет функция которая будет вызываться на этот action
        [actions.CREATE_COUNTER]: (state) => {
            const countersCopy = [...state.counters];

            const newCounter = {
                id: uuid(),
                countValue: 0
            };

            countersCopy.push(newCounter);

            return {
                ...state,
                counters: countersCopy,
            };
        },

        [actions.REMOVE_ALL]: () => defaultState,

        [actions.INCREMET_COUNTER]: (state, {payload: id}) => {
            const countersCopy = [...state.counters];

            const foundCounter = countersCopy.find(
                (counter) => counter.id === id // или payload
            )
            foundCounter.countValue += 1;

            return {
                counters: countersCopy
            }

        },

        [actions.DECREMET_COUNTER]: (state, {payload: id}) => {
            const countersCopy = [...state.counters];

            const foundCounter = countersCopy.find(
                counter => counter.id === id
            )
            foundCounter.countValue -= 1;

            return {
                counters: countersCopy
            }
        },

        [actions.DELETE_COUNTER]: ((state, { payload: id}) => {
            const countersCopy = [...state.counters]

            const counterIndextoRemove = countersCopy.findIndex(
                (counter) => counter.id === id
            )

            countersCopy.splice(counterIndextoRemove, 1)

            return {
                counters: countersCopy
            }
        }),

        [actions.RESET_COUNTER]: ((state, { payload: id}) => {
            const countersCopy = [...state.counters];

            const findElement = countersCopy.find(
                (counter) => counter.id === id
            )
            findElement.countValue = 0;

            return {
                counters: countersCopy
            }
        }),
    },
    defaultState)

// добавляем counterManagerReducer в rootReducer для отображения