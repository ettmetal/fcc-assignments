import { createSlice } from "@reduxjs/toolkit";

const leadingZerosRe = /(?<=[+/*-]|^)(0*)(?!$)/g;
const doubleDecimalRe = /\.{2,}/g;
const duplicateDecimalRe = /(?<=([+/*-]|^)\d*\.\d+)\./g;
const extraOperatorsRe = /[+*/-]+(?=[*/+])/g;

// TODO: Current session reset

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        value: {
            phase: "Session",
            sessionLength: 25,
            breakLength: 5,
            timeSinceStart: 0,
            running: false
        }
    },
    reducers: {
        append: (state, action) => {
            state.value = (state.value + action.payload).replace(leadingZerosRe, '').replace(doubleDecimalRe, '.').replace(duplicateDecimalRe, '').replace(extraOperatorsRe, '')
        },
        increment: (state, action) => {
            state.value[`${action.payload}Length`] = Math.min(state.value[`${action.payload}Length`] + 1, 61)
        },
        decrement: (state, action) => {
            state.value[`${action.payload}Length`] = Math.max(state.value[`${action.payload}Length`] - 1, 1)
        }
    }
});

export const {append, increment, decrement} = clockSlice.actions;

export default clockSlice.reducer;