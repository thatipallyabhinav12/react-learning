import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(true)

  
  

  return (
    <>
      <div>{showBtn? <button>showBtn is true</button> : <button>showBtn is false</button>}</div>
      <button onClick={ () => {setshowBtn(!showBtn)}}>Toggle showBtn</button>
    </>
  )
}

export default App
