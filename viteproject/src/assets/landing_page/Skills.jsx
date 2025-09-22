
import html from '../card/html-card.png'
import css from '../card/css-card.png'
import js from '../card/js-card.png'
import react from '../card/react-card.png'

 const Skills = ()=>{
        const skills_header="I'm Experstise in";
        const skills_cards = [
          {
            image: html,
            course: "HTML",
            skills_have: "Forms and Inputs, Tables and Lists, Links and Navigation, Media Integration."
          },
          {
            image: css,
            course: "CSS",
            skills_have: "Selectors, Flex, Grid, Position, Media Query."
          },
          {
            image: js,
            course: "JavaScript",
            skills_have: "Data Types, Functions, DOM Manipulation, Promise, Async/Await, JSON, Events, Timing Functions."
          },
          {
            image: react,
            course: "React",
            skills_have: "Components, Props, State, Hooks, Lifecycle, Routing, API Calls."
          }
        ];
        

    return (
        <>
      <div className="expertise_header">
          <h1>{skills_header}</h1>
      </div>
      <section className="skills-section">
        {
          skills_cards.map((content,index)=>(
        
      <div key={index} className="expertise_card">
         
          <div className="expertise_card_image">
                <img src={content.image} className='card_image' alt={content.course} />
          </div>
          <div className="expertise_card_content">
            
            <h4>{content.course}</h4>
            <p>{content.skills_have} </p>
          </div>
    
      </div>

      
))}
      </section>
      </>
    )
}
export default Skills;

