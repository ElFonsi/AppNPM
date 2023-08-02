import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue]= useState(0);
  function increment(){
    setValue(value+1)
  };
  function decrement(){
    setValue(value-1)
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

        <h1>{value}</h1>

        <button onClick={increment}>+ increment</button>
        <button onClick={decrement}>- decrement</button>
      </header>
    </div>
  );
}

export default App;
