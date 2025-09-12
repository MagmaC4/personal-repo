import { useState } from 'react'

function TestComponent() {
    const message = "I'm a variable that doesn't get used";
    
    const [num, setNum] = useState(3);
    
    return (
        <>
            {/* This is a JSX comment */}

            <p>My favorite number is {num}</p>

            {/* Functions must be called by events in jsx, such as a button click */}
            <button onClick={() => setNum(7)}>Change mind</button>
        </>
    )
}

export default TestComponent