import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'; 
import Members from '../Members/Members';
import Login from '../Login/Login';


import { useToken } from '../../services/auth';

function App() { 
  const { token, setToken } = useToken();

  // If not logued return login form
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Union Tracking</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} /> 
          <Route path='/members' element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
