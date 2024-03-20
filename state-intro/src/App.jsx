import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(10)
  const [color, setColor] = useState(0)
  useEffect(() => {
    alert("Hey, welcome to react js")
  }, [])

  useEffect(() => {
    alert("Count was changed")
    setColor(color+1)
  }, [count])

  useEffect(() => {
    alert("Color was changed")
  }, [color])

  return (
    <>
      <Navbar color={"red" + color}/>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update count</button>
      <div>Second count {count}</div>

    </>
  )
}

export default App
