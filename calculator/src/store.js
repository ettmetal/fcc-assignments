import { configureStore } from '@reduxjs/toolkit';
import expressionReducer from './expressionSlice';

// I'm using Redux here mostly to say I have - it's not really helpful on this
// scale I think. Also because it kinda breaks composability

export default configureStore({
    reducer: {
        expression: expressionReducer
    }
});