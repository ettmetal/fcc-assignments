import './MarkdownInput.css';
import PropTypes from 'prop-types';
// TODO: Add clear button

function MarkdownInput(props) {
    const updateInput = event => props.setter(event.target.value);
        return (
            <textarea type="text" onChange={updateInput}>{props.markdown}</textarea>
        );
}

MarkdownInput.defaultProps = {
    markdown: ''
};

MarkdownInput.propTypes = {
    markdown: PropTypes.string.isRequired,
    markdownSetter: PropTypes.func.isRequired
};

export default MarkdownInput;
