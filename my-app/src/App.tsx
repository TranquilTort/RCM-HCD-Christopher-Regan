import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState(null)

  useEffect(()=> {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBreweries(data));
  }, []);
  console.log(breweries)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
