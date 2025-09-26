import { useState } from 'react'

function TestButtonClick() {
    const [buttonText, changeText] = useState("Click Me");
    
    const [num, setNum] = useState(3);

    const handleClick = () => {
        changeText("You clicked me! Ouch!")
    }
    
    return (
        <>
            {/* Functions must be called by events in jsx, such as a button click */}
            <button onClick = {handleClick}> {buttonText} </button>
        </>
    )
}

export default TestButtonClick