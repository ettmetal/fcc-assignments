import Markdown from 'react-markdown';

function MarkdownViewer(props) {
    return (
      <output>
        <Markdown>{props.markdown}</Markdown>
      </output>
    );
  }

  export default MarkdownViewer;