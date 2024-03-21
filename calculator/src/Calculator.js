import { useSelector } from "react-redux";
import Display from "./Display";
import Keypad from "./Keypad";
import './Calculator.css';

function Calculator(){
    return(
        <div className="calculator">
            <Display>
                {useSelector(state => state.expression.value)}
            </Display>
            <Keypad />
        </div>
    );
}

export default Calculator;