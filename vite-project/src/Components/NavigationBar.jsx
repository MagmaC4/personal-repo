// NOTE: this component does not work. Use this as a resource

// Dependencies
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Components
import Aditya from './Aditya'
import TestButtonClick from './TestButtonClick'

function NavigationBar(){
    return (    
    <>
      {/* Navigation links to test components. */}
      <BrowserRouter>
        
        <nav>
          <Link to = "/aditya">Aditya</Link>
          <Link to = "/number-test">Number Test</Link>
        </nav>

        <Routes>
          <Route path = "/aditya" element = {<Aditya/>} />
          <Route path = "/number-test" element = {<TestButtonClick/>} />
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default NavigationBar