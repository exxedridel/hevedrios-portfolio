import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerPortfolio } from "../Styles/Portfolio.styles";
import moon from "../Assets/Portfolio-Page/image-moon.webp";

const Portfolio = () => {
  const { setBgImage, setPortfolioActive } = useContext(AppContext);

  useEffect(() => {
    setBgImage("bgImageOther");
    setPortfolioActive("active");
    return function () {
      setPortfolioActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GridContainerPortfolio as="main" className="flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Select a project
      </h1>
      <img src={moon} alt="luna de mientras xd" />

      <div className="tab-list underline-indicators flex">
        <button className="active uppercase ff-sans-cond text-accent letter-spacing-2">
          bajo•la musica
        </button>
        <button className="uppercase ff-sans-cond text-accent letter-spacing-2">
          Xperimental Sounds
        </button>
        <button className="uppercase ff-sans-cond text-accent letter-spacing-2">
          Dank Apps
        </button>
        <button className="uppercase ff-sans-cond text-accent letter-spacing-2">
          This webapp
        </button>
      </div>

      <article className="destination-info flow flow-space--small">
        <h2 className="fs-800 uppercase ff-serif">Bajo la musica</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ut
          enim praesentium vitae maxime modi in, perspiciatis labore minus
          recusandae excepturi explicabo magni sequi repudiandae reiciendis
          impedit nemo quibusdam quasi officiis incidunt nulla nihil dolores
          dolor. Inventore quidem itaque quo sunt.
        </p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Go to page</h3>
            <p className="ff-serif uppercase">button</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Checkout code</h3>
            <p className="ff-serif uppercase">button</p>
          </div>
        </div>
      </article>
    </GridContainerPortfolio>
  );
};

export default Portfolio;
