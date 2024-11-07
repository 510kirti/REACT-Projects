import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);
  // let counter = 5;
  function addValue(){
    if(counter < 20)
      setCounter(counter+1);
    else
      return;
  }
  
  function decreaseValue(){
    if(counter > 0)
      setCounter(counter-1);
    else
      return;
  }
  return (
    <>
      <h1>Counter React Project</h1>
      <h2>Counter: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button
      onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
