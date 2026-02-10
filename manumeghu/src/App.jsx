import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <div>
        <input value={text} onchange={(e) => setText(e.target.value)}/>
        <p>{text}</p>
      </div>
    
    </>
)
}
export default App
