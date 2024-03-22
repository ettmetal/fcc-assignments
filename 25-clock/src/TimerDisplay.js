import { useSelector } from "react-redux";

function TimerDisplay() {
    return(
        <output id="time-left">
            <header>
                <h2 id="timer-label">{useSelector(state => state.clock.value.phase)}</h2>
            </header>
            {useSelector(state => state.clock.value[`${state.clock.value.phase.toLowerCase()}Length`] - state.clock.value.timeSinceStart)}
        </output>
    );
}

export default TimerDisplay;