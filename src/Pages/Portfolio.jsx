import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerPortfolio } from "../Styles/Portfolio.styles";
import { ButtonPill } from "../Styles/Button.styles";
import xperimental from "../Assets/Portfolio/xperimental.png";
import bajolamusic from "../Assets/Portfolio/bajolamusic.png";
import setapps from "../Assets/Portfolio/setapps.png";
import hevedspage from "../Assets/Portfolio/hevedspage.png";
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

  function getImageUrl(index) {
    switch (index) {
      case "0":
        return xperimental;
      case '1':
        return bajolamusic;
      case '2':
        return setapps;
      case '3':
        return hevedspage;
      default:
        return '';
    }
  }

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

      <a className="image-link" href={projects[currentProject].projectUrl}>
        <img src={getImageUrl(projects[currentProject].id)} alt="Current project" />
      </a>

      <div className="tab-list underline-indicators flex">
        {projects.map((project) => (
          <button
            key={project.id}
            id={project.id}
            onClick={() => handleClick(project.id)}
            aria-current={project.isCurrent}
            className="uppercase ff-sans-cond text-accent"
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
          <div className="meta-link">
            <a href={projects[currentProject].projectUrl}>
              <ButtonPill className="ff-serif uppercase">
                Go to Website
              </ButtonPill>
            </a>
          </div>
          <div className="meta-link">
            <a href={projects[currentProject].codeUrl}>
              <ButtonPill className="ff-serif uppercase">
                Check out code
              </ButtonPill>
            </a>
          </div>
        </div>
      </article>
    </GridContainerPortfolio>
  );
};

export default Portfolio;
