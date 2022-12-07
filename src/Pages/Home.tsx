import { GridContainer } from "../Styles/Container.style"

const Home = () => {
   return (
      <>
         <GridContainer>
            <div>
               <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                  Nice to have you here, I'm <span className="d-block fs-900 ff-serif text-white">Heved</span>
               </h1>
               <p>A front-end developer with specialty in React libraries, which means I'm capable of develop
                  the interface and user experience of a variety of projects swimmingly! Also, I'm passionate about 
                  deliver value to my products through the visuals and aesthetic, check out my current projects.
               </p>
            </div>
            <div>
               <a href="/" className="large-button uppercase ff-serif text-dark bg-white">explore</a>
            </div>
         </GridContainer>
      </>
   )
}

export default Home