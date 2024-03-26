import TimeControl from "./TimeControl";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import Beeper from "./Beeper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick } from "./clockSlice";
import './Clock.css';
import alert from './alert.mp3';

function Clock(props) {
    const isRunning = useSelector(state => state.clock.value.running);
    const dispatch = useDispatch();

    // Stuff like this makes it really hard to see how functionality is linked

    // This one ticks the timer
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
    },[isRunning, dispatch]);

    return (
        <>
            <TimeControl type="break"></TimeControl>
            <TimeControl type="session"></TimeControl>
            <TimerDisplay />
            <TimerControls />
            <Beeper source={alert} />
        </>
    );
}

export default Clock;