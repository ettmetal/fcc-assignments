import './Display.css';

function Display(props) {
    return(
        <section id="display" className="display">
            {props.children}
        </section>
    );
}

export default Display;