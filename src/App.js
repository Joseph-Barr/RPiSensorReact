import logo from './logo.svg';
import './App.css';

import Reading from './components/reading'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_API_URL}
        </a>

        <Reading> </Reading>
      </header>
    </div>
  );
}

export default App;
