import './App.css';
import Header from './components/Header';
import Canvas from './components/Canvas';
import React from 'react';

function App() {

  const [thick, setThick] = React.useState(1)
  const [color, setColor] = React.useState('#000000')

  /**
   * Update the thickness of the drawing.
   * @param {number} thick 
   */
  const updateThick = (thick) => {
    setThick(thick);
  }
  /**
   * Update the color of the drawing.
   * @param {color} color 
   */
  const updateColor = (color) => {
    setColor(color)
  }

  return (
    <div className="App">
      <Header
        updateThick={updateThick} 
        updateColor={updateColor}
        currentThick={thick}
        currentColor={color}
      />
      <Canvas 
        currentThick={thick} 
        currentColor={color}
      />
    </div>
  );
}

export default App;
