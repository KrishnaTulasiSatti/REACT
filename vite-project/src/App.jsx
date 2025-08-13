import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is App.jsx Component</h1>
      {/* <Mycomponent /> */}
    </>
  )
}

export default App
