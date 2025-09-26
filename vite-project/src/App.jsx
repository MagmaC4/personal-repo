// Dependencies
import './App.css'
import React, {useState} from 'react';

// Components
import UnityDisplay from './Components/UnityDisplay';
import TimerDisplay from './Components/TimerDisplay';

function App() {

  const [isUnityDisplay,setPage] = useState(true);
  const handleClick = () => {
    setPage(!isUnityDisplay);
    console.log(isUnityDisplay);
  }

  return (    
    <>
      {isUnityDisplay ? (<UnityDisplay/>) : (<TimerDisplay/>)}
      <button onClick={()=>handleClick()} style={{position: 'absolute', top: '25px', left: '50px'}}>
        Switch display
      </button>
    </>
  )
}



export default App
