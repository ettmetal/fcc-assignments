import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Beeper({source}) {
    const audioRef = useRef(null);

    const phaseOver = useSelector(state => state.clock.value.running && state.clock.value.timeSinceStart > state.clock.value[`${state.clock.value.phase.toLowerCase()}Length`]);
    const wasReset = useSelector(state => true);

    useEffect(() => {
        if(phaseOver){
            audioRef.current.play();
        }
        else if(wasReset) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [audioRef, phaseOver, wasReset]);

    return (
        <audio src={source} ref={audioRef} id="beep"></audio> 
    );
}

export default Beeper;