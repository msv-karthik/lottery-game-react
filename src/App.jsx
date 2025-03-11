import { useState } from 'react'
import './App.css'
import Lottery from './lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Lottery />
    </div>
  )
}

export default App
