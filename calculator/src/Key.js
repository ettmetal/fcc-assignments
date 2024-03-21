import './Key.css'

function Key({id, handleClick, className, children}) {
    return(
        <button id={id} onClick={handleClick} className={"key " + className}>
            {children}
        </button>
    );
}

export default Key;