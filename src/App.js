import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disable, setDisable] = useState(false);
  console.log(disable)
  const newColorBUtton = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="App">
      <button
        onClick={() => setButtonColor(newColorBUtton)}
        style={{ backgroundColor: buttonColor }}
        disabled={disable}
      >
        Change to {newColorBUtton}

      </button>
      <input type='checkbox'
        onChange={() => setDisable(true)}
      ></input>
    </div>
  );
}

export default App;
