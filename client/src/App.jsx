import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Is this being used for anything? Alejandra Commented it out to check on other functionality
  //Feel free to put it back
// import { useState } from 'react'

import './App.css'
import './pages/candy.css'
import Home from './pages/home';
import Login from './pages/loginPage';
import Signup from './pages/signup';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navbar';
import CandyCrush from './pages/candy';
import MemoryGame from './pages/memory';
import TicTacToe from './pages/tic-tac-toe';


function App() {

  const { user } = useAuthContext();


  //Is this being used for anything? Alejandra Commented it out to check on other functionality
  //Feel free to put it back

  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Navbar />
        <div className='pages'>
          <Routes>
            {/* if user, navigate to home; if no user, navigate to login page */}
            <Route path = "/" element = {user ? <Home/>: <Navigate to='/login'/>} />

            {/* if no user, navigate to login; if user, navigate to home */}
            <Route path = "/login" element = {!user ? <Login/> : <Navigate to='/' />} />

             {/* if no user, navigate to signup; if user, navigate to home */}
            <Route path = "/signup" element = {!user ? <Signup/> : <Navigate to='/' />} />

            {/* if user, navigate to candy crush game; if no user, navigate to login page */}
            <Route path="/candy" element = {user ? <CandyCrush/>:  <Navigate to='/login'/>}/>

            {/* if user, navigate to memory game, if no user; navigate to login page */}
            <Route path="/memory" element = {user ? <MemoryGame/> : <Navigate to='/login'/>}/>

            {/* if user, navigate to tic tac toe game, if no user; navigate to login page */}
            <Route path="/ticTacToe" element = {<TicTacToe/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
