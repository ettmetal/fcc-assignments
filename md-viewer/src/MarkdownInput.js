import './MarkdownInput.css';
import PropTypes from 'prop-types';
// TODO: Add clear button

function MarkdownInput(props) {
    const updateInput = event => props.markdownSetter(event.target.value);
    return (
        <>
            <label htmlFor="editor">Type markdown:</label>
            <textarea type="text" id="editor" onChange={updateInput} defaultValue={props.markdown} rows="30"></textarea>
        </>
    );
}

MarkdownInput.defaultProps = {
    markdown: '# Hello world!\nI am some demo markdown. [This is how it works](https://www.markdownguide.org/).\n\n## This is a sub-heading\n\n**Check out this list:**\n\n- First item\n- second item\n\nMarkdown is handy for writing `code`, like so:\n\n```html\n<!doctype HTML>\n<html>\n\t<head>\n\t\t<title>Demo HTML Page</title>\n\t</head>\n\t<body>\n\t\t<p>\n\t\t\tHello, world!\n\t\t</p>\n\t</body>\n</html>\n```\n\nIt can create block-quotes, too:\n\n> For reference or callout purposes\n\nAnd even load images.\n\n![freeCodeCamp](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.png)'
};

MarkdownInput.propTypes = {
    markdown: PropTypes.string.isRequired,
    markdownSetter: PropTypes.func.isRequired
};

export default MarkdownInput;
