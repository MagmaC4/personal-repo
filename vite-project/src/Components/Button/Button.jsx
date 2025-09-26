import styles from './Button.module.css'

function Button(){
    
    // Prints information about event object passed to function
    const handleClick = (e) => {
        console.log(e);
    }

    return(
        <button onClick={(e)=>handleClick(e)}>Click Me</button>
    )
}

export default Button