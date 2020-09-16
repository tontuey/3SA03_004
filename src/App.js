import React from 'react';
import WordCard from './WordCard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a><h1>3SA03</h1></a>
        <div>
          <WordCard value="hello"/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           React LAB
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
