import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef()

  useEffect(() => {
    console.log("First Rendering");
    btnRef.current.style.backgroundColor = "blue"
  }, [])
  

  return (
    <>
      <div>The count is {count}</div>
      <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Update count</button>
      <button onClick={() => {btnRef.current.style.display = "none"}}>Click me</button>
    </>
  )
}

export default App
