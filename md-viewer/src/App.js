import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput';
import MarkdownViewer from './MarkdownViewer';
import { useState } from 'react';

// TODO: Support file export
// TODO: Supoprt file print / to PDF or rendered?

// TODO: Style better -> file buttons to the right side? (or to flex-start for rtl)

function App() {
  const [markdown, setMarkdown] = useState('# Hello world!\nI am some demo markdown. [This is how it works](https://www.markdownguide.org/).\n\n## This is a sub-heading\n\n**Check out this list:**\n\n- First item\n- second item\n\nMarkdown is handy for writing `code`, like so:\n\n```html\n<!doctype HTML>\n<html>\n\t<head>\n\t\t<title>Demo HTML Page</title>\n\t</head>\n\t<body>\n\t\t<p>\n\t\t\tHello, world!\n\t\t</p>\n\t</body>\n</html>\n```\n\nIt can create block-quotes, too:\n\n> For reference or callout purposes\n\nAnd even load images.\n\n![freeCodeCamp](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.png)');
  return (
    <>
      <header className="App-header">
        <h1>Markdown editor</h1>
      </header>
      <main>
        <MarkdownInput markdownSetter={setMarkdown} markdown={markdown} />
        <MarkdownViewer markdown={markdown} />
      </main>
    </>
  );
}

export default App;
