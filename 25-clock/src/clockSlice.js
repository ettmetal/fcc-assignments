import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        value: {
            phase: "Session",
            sessionLength: 25 * 60,
            breakLength: 5 * 60,
            timeSinceStart: 0,
            running: false
        }
    },
    reducers: {
        increment: (state, action) => {
            state.value[`${action.payload}Length`] = Math.min(state.value[`${action.payload}Length`] + 60, 61 * 60)
        },
        decrement: (state, action) => {
            state.value[`${action.payload}Length`] = Math.max(state.value[`${action.payload}Length`] - 60, 1 * 60)
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
            state.sessionLength = 25 * 60;
            state.breakLength = 5 * 60;
            state.timeSinceStart = 0;
        }
    }
});

export const {increment, decrement, tick, start, stop, pause, reset} = clockSlice.actions;

export default clockSlice.reducer;