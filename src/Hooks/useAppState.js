import { useState, useRef } from "react";

const usePageFunctionality = () => {
  const [bgImage, setBgImage] = useState("");
  const [homeActive, setHomeActive] = useState("");
  const [portfolioActive, setPortfolioActive] = useState("");
  const [servicesActive, setServicesActive] = useState("");
  const [aboutActive, setAboutActive] = useState("");
  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return {
    bgImage,
    setBgImage,
    homeActive,
    setHomeActive,
    portfolioActive,
    setPortfolioActive,
    servicesActive,
    setServicesActive,
    aboutActive,
    setAboutActive,
    mainRef,
    mainFocus,
  };
};

export default usePageFunctionality;
