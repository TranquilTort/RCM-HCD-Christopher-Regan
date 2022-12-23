import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles.scss';
import ListContainer from './Components/ListContainer'

function App() {
  const [breweries, setBreweries] = useState(null)

  useEffect(()=> {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBreweries(data));
  }, []);
  if(breweries == null){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Loading Brewery Data Please Wait...
          </p>
         
        </header>
      </div>
    );
  }

  
  return(
    <ListContainer breweries={breweries} />
  )
}

export default App;
