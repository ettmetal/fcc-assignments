import { useSelector } from "react-redux";
import './TimerControl.css';

function TimerControls(){
    const running = useSelector(state => state.clock.value.running);
    let startStopIcon = running ? "fa-stop" : "fa-play";
    let startStopLabel = running ? "Stop the timer" : "Start the timer";

    return (
        <menu>
            <li>
                <button id="start_stop">
                    <i className={`fa-solid ${startStopIcon}`} title={startStopLabel}></i>
                </button>
            </li>
            <li>
                <button>
                    <i className="fa-solid fa-pause"></i>
                </button>
            </li>
            <li>
                <button id="reset">
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </li>
        </menu>
    );
}

export default TimerControls;