// Dependencies

// Components
import Card from './Card/Card.jsx'

function UnityDisplay() {
  return (    
    <>
      {/* BroCode tutorial */}
      
      <h1 className='title'>Ben's Unity Experience</h1>
      
      <Card img='src/assets/obstacle_course.webp'
            link='https://play.unity.com/en/games/2edf36c7-72b1-49f1-a415-52c28017d633/obstacle-course-noobs-stay-out'
            title='Obstacle Course'
            desc='The first game I ever made in Unity. This obstacle supports a terrible
            and glitchy movement system. Although I did make all the models in blender.'
            />

      <Card img='src/assets/flappy_bird.webp' 
            link='https://play.unity.com/en/games/24319295-733c-42ab-a1cd-496423744979/falpy-gird'
            title='Falpy Gird' 
            desc='The second game I ever made in Unity. I followed a 50 minute tutorial 
            from GMMK and spent three days after learning and applying new Unity systems 
            so I could feel good about putting my own spin on the game. Legend has it a 
            dragon roams the sky.'/>

      <Card img='src/assets/trick_or_treat.png'
            link='https://www.youtube.com/shorts/6VHfEupN77g'
            title='Trick or Treat'
            desc="The game I'm currently making with Unity. The goal of the game is to 
            catch all the falling candy in your bucket. You can throw candy with left
            click. Try to aim for the giant pumpkin!"
            />
    </>
  )
}

export default UnityDisplay
