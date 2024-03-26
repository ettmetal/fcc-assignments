import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        value: {
            phase: "Session",
            sessionLength: 25 * 60,
            breakLength: 5 * 60,
            timeSinceStart: 0,
            running: false,
            playBeep: false
        }
    },
    reducers: {
        increment: (state, action) => {
            state.value[`${action.payload}Length`] = Math.min(state.value[`${action.payload}Length`] + 60, 60 * 60)
        },
        decrement: (state, action) => {
            state.value[`${action.payload}Length`] = Math.max(state.value[`${action.payload}Length`] - 60, 1 * 60)
        },
        tick: (state) => {
            state.value.timeSinceStart += 1;
            if(state.value.timeSinceStart === state.value[`${state.value.phase.toLowerCase()}Length`]){
                // Phase over
                state.value.playBeep = true;
            }
            if(state.value.timeSinceStart > state.value[`${state.value.phase.toLowerCase()}Length`]){
                // Phase over
                state.value.phase = state.value.phase === "Session" ? "Break" : "Session";
                state.value.timeSinceStart = 0; 
            }
        },
        start: (state) => {
            state.value.running = true;
            state.value.playBeep = false;
        },
        stop: (state) => {
            state.value.running = false;
            state.timeSinceStart = 0;
            state.value.playBeep = false;
        },
        pause: (state) => {
            // It's too easy to forget ".value" - it just feels superfluous
            state.value.running = false;
            state.value.playBeep = false;
        },
        reset: (state) => {
            // This paradigm really makes it hard to respond to changes - i.e.
            // it's not an event I can subscribe to elsewhere
            state.value.running = false;
            state.value.sessionLength = 25 * 60;
            state.value.breakLength = 5 * 60;
            state.value.timeSinceStart = 0;
            state.value.phase = "Session";
            // Solving this by adding a flag feels really hacky - the global 
            // state is now polluted with something that is a local concern,
            // and every action needed to be updated to manage it - because
            // these actions don't seem to be composable
            state.value.playBeep = false;
        }
    }
});

export const {increment, decrement, tick, start, stop, pause, reset} = clockSlice.actions;

export default clockSlice.reducer;