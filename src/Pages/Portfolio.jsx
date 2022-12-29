import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerPortfolio } from "../Styles/Portfolio.styles";
import projects from "../Data/projectsData";

const Portfolio = () => {
  const { setBgImage, setPortfolioActive } = useContext(AppContext);
  const [currentProject, setCurrentProject] = useState(0);

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
    document
      .querySelector('[aria-current="true"]')
      .setAttribute("aria-current", false);
    document.getElementById(index).setAttribute("aria-current", true);
  }

  return (
    <GridContainerPortfolio as="main" className="flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Select a project
      </h1>
      <img src={projects[currentProject].image} alt="Current project" />

      <div className="tab-list underline-indicators flex">
        {projects.map((project) => (
          <button
            key={project.id}
            id={project.id}
            onClick={() => handleClick(project.id)}
            aria-current={project.isCurrent}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
          >
            {project.title}
          </button>
        ))}
      </div>

      <article className="destination-info flow flow-space--small">
        <h2 className="fs-800 uppercase ff-serif">
          {projects[currentProject].title}
        </h2>

        <p>{projects[currentProject].description}</p>

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
