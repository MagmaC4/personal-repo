import React, {useEffect, useState, useRef} from 'react'

function TimerDisplay(){
    const [time, setTime] = useState(Date.now());
    const intervalRef = useRef(null);

    // Begin an interval when page is first rendered
    useEffect(() => {
        // start interval and store its ID for later
        intervalRef.current = setInterval(() => {setTime(Date.now())}, 1);

        // stop interval with its ID
        return() => {clearInterval(intervalRef.current)}

    }, []);

    const formatTimeToString = (time) => {
        
        // Accounting for UTC timezone, which is behind five hours
        let hourOffset = -5;
        
        let seconds = Math.floor(time / 1000 % 60); 
        let minutes = Math.floor(time / 1000 / 60 % 60); 
        let hours = (Math.floor(time / 1000 / 3600) + hourOffset) % 24; 
        
        // Make sure all numbers in clock have at least two digits
        seconds = String(seconds).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        hours = String(hours).padStart(2, "0");

        return (
            hours + ":" + minutes + ":" + seconds
        )
    }
    
    
    return(
        <div style={{color: 'white', textAlign: 'center'}}>

            <p>Epoch is defined as January 1st, 1970. It is when computers have started to keep track of time.</p>
            <p>{time} milliseconds since epoch</p>
            <p>{Math.floor(time / 1000)} seconds since epoch</p> 
            <p>{Math.floor(time / 1000 / 60)} minutes since epoch</p> 
            <p>{Math.floor(time / 1000 / 3600)} hours since epoch</p> 
            <p>{Math.floor(time / 1000 / 3600 / 24)} days since epoch</p> 
            <p>{Math.floor(time / 1000 / 3600 / 24 / 365)} years since epoch</p> 

            <p>{formatTimeToString(time)}</p>
            
        </div>
    )
}

export default TimerDisplay