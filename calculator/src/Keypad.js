import { useDispatch } from "react-redux";
import Key from "./Key";
import { clear, append, evaluate } from "./expressionSlice";
//import {numToWords} from 'num-to-words';
import './Keypad.css';

// Hoisting seems painful, and Contexts and Redux honestly seem to go againt
// atomicity and composability.

// These aren't composable. They rely on this specific application architecture

// Handing the action down to the Key means I'm still just "hoisting". But
// having the key grab it directly means it's not really "pure" or composable


// I was using label as a prop. More verbose, less compose-y

// My experience making this with Redux is mostly "I don't understand why I'm
// doing this" so I don't really expect to learn much. react-redux is a high-
// level connecting API that exposes lower levels of abstraction as errors. 
// Why can't I use useDispatch in a callback? I'll never know. But I can't.
// So I've just done this. Talk about fighting the framework - if your function
// needs to be run from a specific place, it's not very pure / composible 😅

function Keypad(){
    const dispatch = useDispatch();
    return(
        <section className="keypad">
            <Key id="equals" handleClick={() => dispatch(evaluate())}>
                =
            </Key>
            <Key id="clear" handleClick={() => dispatch(clear())}>
                AC
            </Key>
            <Key id="zero" className="number-key" handleClick={() => dispatch(append("0"))}>
                0
            </Key>
            <Key id="one" className="number-key" handleClick={() => dispatch(append("1"))}>
                1
            </Key>
            <Key id="two" className="number-key" handleClick={() => dispatch(append("2"))}>
                2
            </Key>
            <Key id="three" className="number-key" handleClick={() => dispatch(append("3"))}>
                3
            </Key>
            <Key id="four" className="number-key" handleClick={() => dispatch(append("4"))}>
                4
            </Key>
            <Key id="five" className="number-key" handleClick={() => dispatch(append("5"))}>
                5
            </Key>
            <Key id="six" className="number-key" handleClick={() => dispatch(append("6"))}>
                6
            </Key>
            <Key id="seven" className="number-key" handleClick={() => dispatch(append("7"))}>
                7
            </Key>
            <Key id="eight" className="number-key" handleClick={() => dispatch(append("8"))}>
                8
            </Key>
            <Key id="nine" className="number-key" handleClick={() => dispatch(append("9"))}>
                9
            </Key>
            <Key id="decimal" handleClick={() => dispatch(append("."))}>
                .
            </Key>
            <Key id="add" className="operator-key" handleClick={() => dispatch(append("+"))}>
                +
            </Key>
            <Key id="subtract" className="operator-key" handleClick={() => dispatch(append("-"))}>
                -
            </Key>
            <Key id="multiply" className="operator-key" handleClick={() => dispatch(append("*"))}>
                ×
            </Key>
            <Key id="divide" className="operator-key" handleClick={() => dispatch(append("/"))}>
                ÷
            </Key>
        </section>
    );
}

export default Keypad;