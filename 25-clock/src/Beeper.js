import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Beeper({source}) {
    const audioRef = useRef(null);

    const playBeep = useSelector(state => state.clock.value.playBeep);

    useEffect(() => {
        if(playBeep){
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [audioRef, playBeep]);

    return (
        <audio src={source} ref={audioRef} id="beep"></audio> 
    );
}

export default Beeper;