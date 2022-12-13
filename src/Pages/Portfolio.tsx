import moon from "../Assets/Portfolio/image-moon.png"

const Portfolio = () => {
  return (
    <main>
      <h1 className="numbered-title"><span aria-hidden="true">01</span>Select a project</h1>
      <img src={moon} alt="luna de mientras xd" />

      <div className="tab-list underline-indicators flex">
        <button aria-selected="true" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Bajo la Música</button>
        <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Pablo Palgon</button>
        <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Dank Apps</button>
        <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">My Portfolio</button>
      </div>


      <h2 className="fs-800 uppercase ff-serif">Bajo la Música</h2>

      <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.</p>

      <div className="flex">
        <div>
          <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
          <p className="fs-500 ff-serif uppercase">384,400 km</p>
        </div>
        <div>
          <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
          <p className="fs-500 ff-serif uppercase">3 days</p>
        </div>
      </div>
    </main>
  )
}

export default Portfolio