//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './page/Landing';
import Resume from './page/Resume';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/Home" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
