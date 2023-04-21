import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import cv from "../Assets/About/heved-moto.png";
import degree from "../Assets/Home/background-keys-mobile.jpg";
import frontend from "../Assets/Home/background-keys-tablet.jpg";
import english from "../Assets/Home/background-keys-desktop.jpg";

import { GridContainerAbout } from "../Styles/About.styles";
import tabsData from "../Data/aboutData";

const About = () => {
  const { setBgImage, setAboutActive } = useContext(AppContext);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    setBgImage("bgImageOther");
    setAboutActive("active");
    return function () {
      setAboutActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(index) {
    setCurrentTab(index);
    console.log(tabsData[currentTab].isCurrent)
    document
      .querySelector('[aria-current="true"]')
      .setAttribute("aria-current", false);
    document.getElementById(index).setAttribute("aria-current", true);
  }

  function getImageUrl(index) {
    console.log(index);
    switch (index) {
      case "0":
        return cv;
      case '1':
        return degree;
      case '2':
        return frontend;
      case '3':
        return english;
      default:
        return '';
    }
  }

  return (
    <>
      <GridContainerAbout as="main" className="flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span>Who I Am
        </h1>

        <div className="dot-indicators flex">
          {
            tabsData.map((tabdata) => (
              <button
                key={tabdata.id}
                id={tabdata.id}
                onClick={() => handleClick(tabdata.id)}
                aria-current={tabdata.isCurrent}
              >
                <span className="sr-only">Bachelor of Computer Science</span>
              </button>
            ))
          }
          {/* <button>
            <span className="sr-only">Front-end certificate</span>
          </button>
          <button>
            <span className="sr-only">English certificate</span>
          </button>
          <button>
            <span className="sr-only">Curriculum Vitae</span>
          </button> */}
        </div>

        <article className="crew-details flow">
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">{tabsData[currentTab].subtitle}</h2>
            <p className="fs-700 uppercase ff-serif text-accent">{tabsData[currentTab].title}</p>
          </header>
          <p>
          {tabsData[currentTab].description}
          </p>
        </article>

        <img src={getImageUrl(tabsData[currentTab].id)} alt="Heved in motorcycle" />
      </GridContainerAbout>


    </>
  );
};

export default About;
