import TimeControl from "./TimeControl";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick } from "./clockSlice";
import './Clock.css';

function Clock(props) {
    const isRunning = useSelector(state => state.clock.value.running);
    const dispatch = useDispatch();

    // Stuff like this makes it really hard to see how functionality is linked

    useEffect(() => {
        let interval;
        if(isRunning) {
            interval = setInterval(() => {
                dispatch(tick());
            }, 1000);
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isRunning, dispatch, tick]);

    return (
        <>
            <TimeControl type="break"></TimeControl>
            <TimeControl type="session"></TimeControl>
            <TimerDisplay />
            <TimerControls />
        </>
    );
}

export default Clock;