import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

export const replaceCamelWithSoace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g ,' $1')

}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disable, setDisable] = useState(false);
  console.log(buttonColor)
  const newColorBUtton = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div className="App">
      {/* {setDisable === true ? setButtonColor('grey'):} */}
      <button
        onClick={() => setButtonColor(newColorBUtton)}
        style={{ backgroundColor: disable ? 'gray' : buttonColor }}
        disabled={disable}
      >
        Change to {replaceCamelWithSoace(newColorBUtton)} 

      </button>
      <input type='checkbox'
        onChange={(e) => setDisable(e.target.checked)}
      ></input>
    </div>
  );
}

export default App;
