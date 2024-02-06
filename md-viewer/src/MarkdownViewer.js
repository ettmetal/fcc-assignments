import Markdown from 'react-markdown';

function MarkdownViewer(props) {
    return (
      <>
        <label htmlFor="preview">Rendered markdown:</label>
        <output id="preview">
            <Markdown>{props.markdown}</Markdown>
        </output>
      </>
    );
  }

  export default MarkdownViewer;