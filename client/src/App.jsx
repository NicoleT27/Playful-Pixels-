import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import './App.css'

import Home from './pages/home';
import Login from './pages/loginPage';
import Signup from './pages/signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/signup" element = {<Signup/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
