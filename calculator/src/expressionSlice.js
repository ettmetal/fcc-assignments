import { createSlice } from "@reduxjs/toolkit";

const leadingZerosRe = /(?<=[+/*-]|^)(0*)(?!$)/g;
const doubleDecimalRe = /\.{2,}/g;
const duplicateDecimalRe = /(?<=([+/*-]|^)\d*\.\d+)\./g;
const extraOperatorsRe = /[+*/-]+(?=[*/+])/g;

export const expressionSlice = createSlice({
    name: 'expression',
    initialState: {
        value: 0
    },
    reducers: {
        append: (state, action) => {
            state.value = (state.value + action.payload).replace(leadingZerosRe, '').replace(doubleDecimalRe, '.').replace(duplicateDecimalRe, '').replace(extraOperatorsRe, '')
        },
        clear: (state) => {
            state.value = "0"
        },
        evaluate: (state) => {
            // eslint-disable-next-line
            state.value = eval(state.value).toString()
        }
    }
});

export const {append, clear, evaluate} = expressionSlice.actions;

export default expressionSlice.reducer;