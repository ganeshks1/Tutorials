import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter++
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter > 0){ 
      counter = counter - 1
    } else {
      alert("Can't go Below Zero")
      
    }
    
    setCounter(counter)
  }




  return (
    <>
      <h1>This is Counting Function</h1>
      <h2>Current Counter : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      
    </>
  )
}

export default App
