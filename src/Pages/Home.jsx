import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Link } from "react-router-dom";
import { GridContainerHome } from "../Styles/Home.styles";
import { ButtonLarge } from "../Styles/Button.styles";

const Home = () => {
  const { mainRef, setBgImage } = useContext(AppContext);

  useEffect(() => {
    setBgImage((prevState) => [...prevState, "bgImageHome"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <GridContainerHome as="main">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            Nice to have you here, I'm{" "}
            <span className="d-block fs-900 ff-serif text-white">Heved</span>
          </h1>
          <p>
            A front-end developer with specialty in React libraries, which means
            I'm capable of developing the interface and user experience of a
            variety of projects swimmingly plus adding value through the visuals
            and aesthetic, check out my current work!
          </p>
        </div>
        <ButtonLarge>
          <Link
            ref={mainRef}
            to="portfolio"
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            let's go!
          </Link>
        </ButtonLarge>
      </GridContainerHome>
    </>
  );
};

export default Home;
