import './DrumPad.css';
import { useEffect, useRef } from 'react';

// I think I'd have one audio source? or if that's not feasible, have them
// seperate from the controls - so that application state can handle what is
// playing when seperatley

// event registration should be on lifecycle, I want to try using hooks (as
// I'm already using refs) to do that "funcitonal" style.

// I wanted to use onKeyDown in the button element, but that doesn't work
// unless the button has focus, apparently. It feels hacky to attach things to
// the window, but at least I'm making sure I clean it up

function DrumPad(props) {
    const audioRef = useRef(null);
    const playSample = () => {
        audioRef.current.play();
        props.setPlaying(props.name);
    };
    const keyDown = event => {
        if(event.key.toUpperCase() === props.trigger.toUpperCase()){
            event.preventDefault();
            playSample();
        }
    }

    // Use useEffect for 'lifecycle'
    useEffect(() =>{
        // Setup, equivalent to 'componentDidMount'
        window.addEventListener('keydown', keyDown);
        return () => {
            // Teardown, equivalent to ''
            window.removeEventListener('keydown', keyDown);
        };
    }, []);

    return (
        <button className="drum-pad" id={props.name} onClick={playSample}>
            {props.trigger}
            <audio src={props.src} className="clip" id={props.trigger} ref={audioRef}></audio>
        </button>
    );
}

export default DrumPad;