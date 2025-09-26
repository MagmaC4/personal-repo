import styles from './Card.module.css'

function Card(props){
    return(
        <a href={props.link} target='_blank'>
            <div className={styles.card}>
                
                <div className={styles.cardLeft}>
                    <h2 className={styles.cardTitle}>{props.title}</h2>
                    <p className={styles.cardText}>{props.desc}</p>
                </div>
                
                <div className={styles.cardRight}>
                    {/* target='_blank' makes the link open in new tab*/}
                    
                    <img className={styles.cardImage} src={props.img}  alt="game preview"></img>
                    
                </div>
                
            </div>
        </a>
    )

    Card.defaultProps = {
        img: "",
        link: "https://www.youtube.com/watch?v=cW_UUjMDmo4",
        title: "No Title",
        desc: "No Description",
    }
}

export default Card