import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserPage from './pages/User';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
