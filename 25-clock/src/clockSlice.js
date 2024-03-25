import { createSlice } from "@reduxjs/toolkit";

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
        increment: (state, action) => {
            state.value[`${action.payload}Length`] = Math.min(state.value[`${action.payload}Length`] + 1, 61)
        },
        decrement: (state, action) => {
            state.value[`${action.payload}Length`] = Math.max(state.value[`${action.payload}Length`] - 1, 1)
        },
        tick: (state) => {
            state.value.timeSinceStart += 1;
        },
        start: (state) => {
            state.value.running = true;
        },
        stop: (state) => {
            state.value.running = false;
            state.timeSinceStart = 0;
        },
        pause: (state) => {
            state.running = false;
        },
        reset: (state) => {
            state.value.running = false;
            state.sessionLength = 25;
            state.breakLength = 5;
            state.timeSinceStart = 0;
        }
    }
});

export const {increment, decrement, tick, start, stop, pause, reset} = clockSlice.actions;

export default clockSlice.reducer;