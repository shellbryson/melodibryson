import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Melodi Bryson</h1>
      <div className="card">
        <p>
          My name is Melodi and I am a student in Edinburgh.
        </p>
      </div>
    </>
  )
}

export default App
