import { useState } from 'react'

function Aditya(){
    const [desc, setDescription] = useState("gangsta!")
    
    const handleChange = () => {
        setDescription(event.target.value);
    }
    
    return(
        <>
            <p>Aditya is a {desc}</p>

            
            <input 
                type = "test"    
                value = {desc}
                onChange = {handleChange} 
            />
            
        </>
    )
}

export default Aditya