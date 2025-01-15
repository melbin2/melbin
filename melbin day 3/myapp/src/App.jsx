import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componets/Login'
import Signup from './componets/Signup'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './componets/State'
import Name from './componets/Name'
import Counter from './componets/Counter'
import Api from './componets/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Login page</h1>
        <Routes>
          <Route path="/log" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/State" element={<State />} />
          <Route path="/c" element={<Counter />} />
          <Route path="/Name" element={<Name/>} />
          <Route path="/api" element={<Api />} />
        </Routes>
        <Navbar/>


   </div>
  )
}

export default App
