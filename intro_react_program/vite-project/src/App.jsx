// Dependencies
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

// Images
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Components
import TestComponent from './TestComponent.jsx'
import Aditya from './Aditya.jsx'

function App() {
  return (    
    <BrowserRouter>
      {/* Your code here */}

      <nav>
        <Link to = "/aditya">Aditya | </Link>
        <Link to = "/number-test">Number Test</Link>
      </nav>

      <Routes>
        <Route path = "/aditya" element = {<Aditya/>} />
        <Route path = "/number-test" element = {<TestComponent/>} />
      </Routes>

    </BrowserRouter>
  )
}



export default App
