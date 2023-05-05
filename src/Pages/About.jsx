import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import hevedResume from "../Assets/About/heved-resume.pdf";
import bcsPdf from "../Assets/About/bcs-certificate.pdf";
import cv from "../Assets/About/hevedMoto-noBg-circle.png";
import degree from "../Assets/About/bcs-cert.png";
import frontend from "../Assets/About/scrimba-cert.png";
import english from "../Assets/About/english-cert.png";
import tabsData from "../Data/aboutData";
import { GridContainerAbout } from "../Styles/About.styles";
import { ButtonPill } from "../Styles/Button.styles";

const About = () => {
  const { setBgImage, setAboutActive } = useContext(AppContext);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    setBgImage("bgImageHome");
    setAboutActive("active");
    return function () {
      setAboutActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(index) {
    setCurrentTab(index);
    document
      .querySelector('[aria-current="true"]')
      .setAttribute("aria-current", false);
    document.getElementById(index).setAttribute("aria-current", true);
  }

  function getImageUrl(index) {
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

  function getPdfUrl(index) {
    switch (index) {
      case "0":
        return hevedResume;
      case '1':
        return bcsPdf;
      case '2':
        return "https://scrimba.com/certificate/uwEkgLsV/gfrontend";
      case '3':
        return "https://www.efset.org/cert/XW34kF";
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
        </div>

        <article className="about-details flow">
          <header className="flow flow-space--small">
            <h2 className="fs-600 ff-serif uppercase">{tabsData[currentTab].subtitle}</h2>
            <p className="fs-700 uppercase ff-serif text-accent">{tabsData[currentTab].title}</p>
          </header>
          <p>
            {tabsData[currentTab].description}
          </p>
          <ButtonPill className="ff-serif uppercase">
            <a href={getPdfUrl(tabsData[currentTab].id)} target="_blank" rel="noreferrer">{tabsData[currentTab].linkName}</a>
          </ButtonPill>
        </article>

        <img src={getImageUrl(tabsData[currentTab].id)} alt="Heved in motorcycle" />
      </GridContainerAbout>
    </>
  );
};

export default About;
