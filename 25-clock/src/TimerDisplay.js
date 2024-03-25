import { useSelector } from "react-redux";

function TimerDisplay() {
    const length = useSelector(state => state.clock.value[`${state.clock.value.phase.toLowerCase()}Length`]);
    const timeSinceStart = useSelector(state => state.clock.value.timeSinceStart);

    const remaining = length - timeSinceStart;
    const minutesRemaining = Math.floor(remaining / 60);
    const secondsRemaining = remaining % 60;

    return(
        <section className="timer">
            <header>
                <h2 id="timer-label">{useSelector(state => state.clock.value.phase)}</h2>
            </header>
            <output id="time-left">
                {`${minutesRemaining < 10 ? "0": ""}${minutesRemaining}:${secondsRemaining < 10 ? "0": ""}${secondsRemaining}`}
            </output>
        </section>
    );
}

export default TimerDisplay;