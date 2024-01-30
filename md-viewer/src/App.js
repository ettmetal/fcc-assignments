import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput';
import { useState } from 'react';
import Markdown from 'react-markdown';

function MarkdownViewer(props) {
  return (
    <output>
      <Markdown>{props.markdown}</Markdown>
    </output>
  );
}

// TODO: Support file upload / import?
// TODO: Support file export
// TODO: Supoprt file print / to PDF or rendered?

function App() {
  const [markdown, setMarkdown] = useState('');
  return (
    <>
      <header className="App-header">
        <h1>Markdown editor</h1>
      </header>
      <main>
        <MarkdownInput setter={setMarkdown} />
        <MarkdownViewer markdown={markdown} />
      </main>
    </>
  );
}

export default App;
