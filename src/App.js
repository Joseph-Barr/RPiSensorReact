import logo from './logo.svg';
import './App.css';

import Reading from './components/reading'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Reading> </Reading>
      </header>
    </div>
  );
}

export default App;
