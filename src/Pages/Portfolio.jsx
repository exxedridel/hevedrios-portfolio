import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerPortfolio } from "../Styles/Portfolio.styles";
import data from "../Data/projectsData";

const Portfolio = () => {
  const { setBgImage, setPortfolioActive } = useContext(AppContext);
  const [currentProject, setCurrentProject] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    setBgImage("bgImageOther");
    setPortfolioActive("active");
    return function () {
      setPortfolioActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(index) {
    setCurrentProject(index);
  }

  return (
    <GridContainerPortfolio as="main" className="flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Select a project
      </h1>
      <img src={data[currentProject].image} alt="Current project" />

      <div className="tab-list underline-indicators flex">
        <button
          onClick={() => handleClick(0)}
          
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
        >
          {data[0].title}
        </button>
        <button
          onClick={() => handleClick(1)}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
        >
          {data[1].title}
        </button>
        <button
          onClick={() => handleClick(2)}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
        >
          {data[2].title}
        </button>
        <button
          onClick={() => handleClick(3)}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
        >
          {data[3].title}
        </button>
      </div>

      <article className="destination-info flow flow-space--small">
        <h2 className="fs-800 uppercase ff-serif">
          {data[currentProject].title}
        </h2>

        <p>{data[currentProject].description}</p>

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
