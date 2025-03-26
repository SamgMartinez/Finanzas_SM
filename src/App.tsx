//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './page/Landing';
//import Resume from './page/Resume';
import LayoutUser from './page/Layout_User';
import Dashboard from './page/dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/User" element={<LayoutUser />}>
          <Route path="/User" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
