import { useDispatch, useSelector } from "react-redux";
import { pause, reset, start, stop } from "./clockSlice";
import './TimerControl.css';

function TimerControls(){
    const running = useSelector(state => state.clock.value.running);
    let startStopIcon = running ? "fa-stop" : "fa-play";
    let startStopLabel = running ? "Stop the timer" : "Start the timer";

    const dispatch = useDispatch();
    const startStopAction = useSelector(state => state.clock.value.running) ? start : stop;

    return (
        <menu>
            <li>
                <button id="start_stop" onClick={() => dispatch(startStopAction())}>
                    <i className={`fa-solid ${startStopIcon}`} title={startStopLabel}></i>
                </button>
            </li>
            <li>
                <button onClick={() => dispatch(pause())}>
                    <i className="fa-solid fa-pause"></i>
                </button>
            </li>
            <li>
                <button id="reset" onClick={() => dispatch(reset())}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </li>
        </menu>
    );
}

export default TimerControls;