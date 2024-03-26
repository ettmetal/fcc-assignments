import { useDispatch, useSelector } from "react-redux";
import { pause, reset, start, stop } from "./clockSlice";
import './TimerControl.css';

function TimerControls(){
    const running = useSelector(state => state.clock.value.running);
    let startStopIcon = running ? "fa-stop" : "fa-play";
    let startStopLabel = running ? "Stop the timer" : "Start the timer";

    const dispatch = useDispatch();
    const startStopAction = useSelector(state => state.clock.value.running) ? stop : start;

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
                <button id="reset" onClick={() => {
                    dispatch(reset());
                    // !-- Added to make test 28 pass, see
                    // https://forum.freecodecamp.org/t/25-5-clock-user-story-28-test-fails/488071/6
                    document.getElementById('beep').pause();
                    document.getElementById('beep').currentTime = 0;
                }}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </li>
        </menu>
    );
}

export default TimerControls;