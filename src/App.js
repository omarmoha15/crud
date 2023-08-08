import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './screen/Dashbord/Dashboard';
import Login from './screen/Login/Login';
import Register from './screen/Register/Register';


function App() {
  return (
    <div>
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
