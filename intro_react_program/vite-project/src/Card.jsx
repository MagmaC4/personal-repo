import flappyImg from './assets/flappy_bird.webp'

function Card(){
    return(
        <div className="card">
            <img src={flappyImg} className="card-image" alt="Flappy Bird preview"></img>
            <h2 className="card-title">Falpy Gird</h2>
            <p className="card-text">The second game I ever made in Unity. I followed a 50 minute tutorial 
            from GMMK and spent three days after learning and applying new Unity systems 
            so I could feel good about putting my own spin on the game. Legend has it a 
            dragon roams the sky.</p>
        </div>
    )
}

export default Card