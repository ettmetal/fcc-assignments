import logo from './logo.svg';
import './App.css';

function MarkdownInput() {
  return (
    <form>
      <input></input>
    </form>
  );
}

function MarkdownViewer() {
  return (
    <div>Placeholder</div>
  );
}

// TODO: Support file upload / import?

function App() {
  return (
    <div className="App">
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
        <MarkdownInput />
        <MarkdownViewer />
      </main>
    </div>
  );
}

export default App;
