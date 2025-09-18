// Dependencies
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

// Components
import TestButtonClick from './TestButtonClick.jsx'
import Aditya from './Aditya.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'

function App() {
  return (    
    <>
      {/* BroCode tutorial */}
      <Card/>
      <Button/>

      {/* Navigation links to test components. Currently ignoring in the pursuit of knowledge
      <BrowserRouter>
        
        <nav>
          <Link to = "/aditya">Aditya | </Link>
          <Link to = "/number-test">Number Test</Link>
        </nav>

        <Routes>
          <Route path = "/aditya" element = {<Aditya/>} />
          <Route path = "/number-test" element = {<TestButtonClick/>} />
        </Routes>

      </BrowserRouter>
      */}
    </>
  )
}



export default App
