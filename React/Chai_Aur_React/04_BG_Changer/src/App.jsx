import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("Hello World")
  const [color, setColor] = useState("Gray")

  return (
    <>
      <div className='w-full h-screen bg-blue-600' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 px-3 inset-x-0'>
          <button onClick={() => setColor("RED")}  className='flex flex-wrap justify-center gap-5 px-3 py-2 m-2 rounded-xl bg-red-500'>RED</button>
          <button onClick={() => setColor("blue")} className='flex flex-wrap justify-center gap-5 px-3 py-2 m-2 rounded-xl bg-blue-600'>Blue</button>
          <button onClick={() => setColor("Green")} className='flex flex-wrap justify-center gap-5 px-3 py-2 m-2 rounded-xl bg-green-500'>Green</button> 
          <button onClick={() => setColor("Violet")} className='flex flex-wrap justify-center gap-5 px-3 py-2  m-2 rounded-xl bg-violet-500'>Voilet</button>
          <button onClick={() => setColor("Yellow")} className='flex flex-wrap justify-center gap-5 px-3 py-2 m-2 rounded-xl bg-yellow-500'>Yellow</button>
        </div>
      </div>
      

    </>
  )
}

export default App
