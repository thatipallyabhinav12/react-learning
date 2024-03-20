import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count+1)}}>Update count</button>
      <div>Second count {count}</div>
    </>
  )
}

export default App
