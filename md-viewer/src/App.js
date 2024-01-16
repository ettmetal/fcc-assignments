import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

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

function MarkdownViewer(props) {
  return (
    <>
      <div>Placeholder</div>
      <div>{props.markdown}</div>
    </>
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <MarkdownInput setter={setMarkdown} />
        <MarkdownViewer markdown={markdown} />
      </main>
    </>
  );
}

export default App;
