import TimeControl from "./TimeControl";
import TimerDisplay from "./TimerDisplay";

// TODO: Add controls
// TODO: Add counter functuion

function Clock(props) {
    return (
        <>
            <TimeControl type="break"></TimeControl>
            <TimeControl type="session"></TimeControl>
            <TimerDisplay />
        </>
    );
}

export default Clock;