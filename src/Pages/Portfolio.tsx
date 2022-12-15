import { GridContainerPortfolio } from "../Styles/Portfolio.styles"
import moon from "../Assets/Portfolio-Page/image-moon.png"

const Portfolio = () => {
  return (
    <GridContainerPortfolio as="main" className="flow">
      <h1 className="numbered-title"><span aria-hidden="true">01</span>Select a project</h1>
      <img src={moon} alt="luna de mientras xd" />

      <div className="tab-list underline-indicators flex">
        <button className="active uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
        <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
        <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
        <button className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Titan</button>
      </div>

      <article className="destination-info">
        <h2 className="fs-800 uppercase ff-serif">Moon</h2>

        <p>See our planet as you've never seen it before. A perfect relaxing trip away to help
          regain perspective and come back refreshed. While you're there, take in some history
          by visiting the Luna 2 and Apollo 11 landing sites.</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">384,400 km</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">3 days</p>
          </div>
        </div>
      </article>
    </GridContainerPortfolio>
  )
}

export default Portfolio