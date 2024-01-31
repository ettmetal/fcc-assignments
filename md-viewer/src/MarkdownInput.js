import './MarkdownInput.css';
import PropTypes from 'prop-types';
// TODO: Add clear button

function MarkdownInput(props) {
    const updateInput = event => props.markdownSetter(event.target.value);
    return (
        <>
            <label htmlFor="markdownInput">Type markdown:</label>
            <textarea type="text" id="markdownInput" onChange={updateInput} defaultValue={props.markdown}></textarea>
        </>
    );
}

MarkdownInput.defaultProps = {
    markdown: '# Hello world!\nI am some demo markdown.'
};

MarkdownInput.propTypes = {
    markdown: PropTypes.string.isRequired,
    markdownSetter: PropTypes.func.isRequired
};

export default MarkdownInput;
