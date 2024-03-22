// If it wasn't for the test requirements to have ids, I'd make this more
// composable by using children

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./clockSlice";

// So many of these unit tests actually feel like they make writing React code
// harder, and would prefer something hand-coded.

function TimeControl({type}) {
    const dispatch = useDispatch();

    return(
        <>
            <label id={`${type}-label`}>
                <button id={`${type}-decrement`} onClick={() => dispatch(decrement(type))}>
                    <i class="fa-solid fa-arrow-down" title={`Decrease ${type} time`}></i>
                </button>
                <output id={`${type}-length`}>
                    {useSelector(state => state.clock.value[`${type}Length`])}
                </output>
                <button id={`${type}-increment`} onClick={() => dispatch(increment(type))}>
                    <i class="fa-solid fa-arrow-up" title={`Increase ${type} time`}></i>
                </button>
            </label>
        </>
    );
}

export default TimeControl;