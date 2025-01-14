import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componets/Login'
import Signup from './componets/Signup'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './componets/State'
  
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body bgcolor="pinegreen">
      <h1>Login page</h1>
    
      <Navbar></Navbar>
      <Routes>
        <Route path="/log" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/State" element={<State />} />
        </Routes>
        </body>
      
      
    
    </>
  )
}

export default App
