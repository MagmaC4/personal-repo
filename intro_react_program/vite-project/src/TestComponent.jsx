import { useState } from 'react'

function TestComponent() {
    // Variables belong above the return statement
    
    // const variables are immutable and read-only
    const message = "I'm a variable that doesn't get used";
    
    // To change the value of variables, they need to be paired with a function that sets the value.
    // useState(value) makes two cell array that stores a value and a function. 
    // variableName points to the value stored in the first cell of that array
    // variableSetFunction will store whatever value its given into the first cell of the array.
    // [variableName, variableSetFunction] = useState(initialValue)
    const [num, setNum] = useState(3);
    
    return (
        <>
            {/* This is a JSX comment */}

            {/* Curly braces around variable names to get their value */}
            <p>My favorite number is {num}</p>

            {/* Functions must be called by events in jsx, such as a button click */}
            <button onClick={() => setNum(7)}>Change mind</button>
        </>
    )
}

export default TestComponent