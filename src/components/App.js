import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [shapes, setShapes] = useState([]);
  const [selected, setSelected] = useState("square");

  function handleAddShape(){
    setShapes((prev) => [...prev, selected.toLowerCase()]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selected} onChange={(e)=> setSelected(e.target.value)}>
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
      {shapes.map((val, idx)=>{
        return <div key={idx} className={val}>{idx}</div>
      })}
      </div>
    </div>
  )
}


export default App;

