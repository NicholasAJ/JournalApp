import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateEntry from './Components/CreateEntry';
import ReadEntry from './Components/ReadEntry';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserGreeting from "./Components/UserGreeting"

function App() {
  const [entries,setEntries] = useState([]);
  return (
    <div>
      <div className="header">
        <p>Let's Journal</p>
        <div className='headerLinks'>
          <p>Home</p>
          <p>Login</p>
          <p>Logout</p>
        </div>
        <div className='accountIconGroup'>
          <p>place holder for account icon</p>
          <ul>
            <label> Coming Features</label>
            <li>account settings</li>
            <li>Edit user information</li>
            <li>Delete Account</li>
          </ul>
        </div>
      </div>
      <div>
        <UserGreeting isLoggedIn={true} username="Nick"/>
      </div>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Register/>}></Route>
            <Route path='/login'element={<Login/>}/>
            <Route path='/home' element={<Home entries={entries}/>}></Route>
            <Route path='/entry/new' element={<CreateEntry entries={entries} setEntries={setEntries}/>}></Route>
            <Route path='/entry/update/:id' element={<ReadEntry/>}></Route>
            <Route path='/logout'></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
