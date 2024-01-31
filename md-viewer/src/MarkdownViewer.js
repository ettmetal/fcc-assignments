import Markdown from 'react-markdown';

function MarkdownViewer(props) {
    return (
      <>
        <label htmlFor="markdown-output">Rendered markdown:</label>
        <output id="markdown-output">
            <Markdown>{props.markdown}</Markdown>
        </output>
      </>
    );
  }

  export default MarkdownViewer;