import './App.css';

import { useEffect } from 'react';

import logo from './logo.svg';

const obj = { id: 5 }


function App () {
  if (name !== '') {
    useEffect(function persistForm () {
      localStorage.setItem('formData', name);
    });
  }
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
