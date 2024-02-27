import './MarkdownInput.css';
import PropTypes from 'prop-types';

function MarkdownInput(props) {
    const updateInput = event => props.markdownSetter(event.target.value);
    const clearInput = () => props.markdownSetter("");
    return (
        <>
            <label htmlFor="editor">Type markdown:</label>
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
