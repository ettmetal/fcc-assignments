import DrumPad from "./DrumPad";
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";
import heater3 from "./audio/Heater-3.mp3";
import heater4 from "./audio/Heater-4_1.mp3";
import clap from "./audio/Heater-6.mp3";
import openHH from "./audio/Dsc_Oh.mp3";
import kickNHat from "./audio/Kick_n_Hat.mp3";
import kick from "./audio/RP4_KICK_1.mp3";
import closedHH from "./audio/Cev_H2.mp3";
import './DrumMachine.css';
import { useState } from "react";

function DrumMachine(props) {
    const tracks = [
        {
            trigger: "Q",
            src: heater1,
            name: "heater-1"
        },
        {
            trigger: "W",
            src: heater2,
            name: "heater-2"
        },
        {
            trigger: "E",
            src: heater3,
            name: "heater-3"
        },
        {
            trigger: "A",
            src: heater4,
            name: "heater-4"
        },
        {
            trigger: "S",
            src: clap,
            name: "clap"
        },
        {
            trigger: "D",
            src: openHH,
            name: "open-hats"
        },
        {
            trigger: "Z",
            src: kickNHat,
            name: "kick-and-hat"
        },
        {
            trigger: "X",
            src: kick,
            name: "kick"
        },
        {
            trigger: "C",
            src: closedHH,
            name: "closed-hats"
        }
    ]

    const [playing, setPlaying] = useState("");

    return (
        <>
            {
                tracks.map((track, _) => <DrumPad name={track.name} src={track.src} trigger={track.trigger} setPlaying={setPlaying}/>)
            }
            <output id="display">{playing}</output>
        </>
    );
}

export default DrumMachine;