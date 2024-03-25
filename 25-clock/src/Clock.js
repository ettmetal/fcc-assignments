import TimeControl from "./TimeControl";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

// TODO: Add controls
// TODO: Add counter functuion

function Clock(props) {
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