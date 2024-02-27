import './MarkdownInput.css';
import PropTypes from 'prop-types';

function MarkdownInput(props) {
    const updateInput = event => props.markdownSetter(event.target.value);
    const clearInput = () => props.markdownSetter("");
    const loadFile = event => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = event => props.markdownSetter(event.target.result);
        reader.readAsText(event.target.files[0]);
    }
    return (
        <>
            <label htmlFor="editor">Type markdown:</label>
            <label htmlFor='fileOpen'>Open a file</label>
            <input id="fileOpen" type="file" accept=".md,text/markdown" onChange={loadFile}></input>
            <button title="Clear input" aria-label="Clear input" onClick={clearInput}><i class="fa fa-solid fa-rotate" aria-hidden="true" /></button>
            <textarea type="text" id="editor" onChange={updateInput} rows="30" defaultValue={props.markdown} value={props.markdown}></textarea>
        </>
    );
}

MarkdownInput.propTypes = {
    markdown: PropTypes.string.isRequired,
    markdownSetter: PropTypes.func.isRequired
};

export default MarkdownInput;
