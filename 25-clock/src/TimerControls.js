import { useSelector } from "react-redux";

function TimerControls(){
    const running = useSelector(state => state.clock.value.running);
    let startStopIcon = running ? "fa-stop" : "fa-play";
    let startStopLabel = running ? "Stop the timer" : "Start the timer";

    return (
        <>
            <button id="start_stop">
                <i className={`fa-solid ${startStopIcon}`} title={startStopLabel}></i>
            </button>
            <button>
                <i className="fa-solid fa-pause"></i>
            </button>
            <button id="reset">
                <i className="fa-solid fa-arrows-rotate"></i>
            </button>
        </>
    );
}

export default TimerControls;