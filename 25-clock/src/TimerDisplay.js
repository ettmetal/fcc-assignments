import { useSelector } from "react-redux";

function TimerDisplay() {
    const length = useSelector(state => state.clock.value[`${state.clock.value.phase.toLowerCase()}Length`]);
    const timeSinceStart = useSelector(state => state.clock.value.timeSinceStart)
    const remaining = length - timeSinceStart;
    return(
        <>
            <header>
                <h2 id="timer-label">{useSelector(state => state.clock.value.phase)}</h2>
            </header>
            <output id="time-left">
                {`${remaining < 10 ? "0": ""}${remaining}:00`}
            </output>
        </>
    );
}

export default TimerDisplay;