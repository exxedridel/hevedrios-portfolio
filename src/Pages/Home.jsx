import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Link } from "react-router-dom";
import { GridContainerHome } from "../Styles/Home.styles";
import { ButtonLarge } from "../Styles/Button.styles";

const Home = () => {
  const { mainRef, setBgImage, setHomeActive } = useContext(AppContext);

  useEffect(() => {
    setBgImage((prevState) => [...prevState, "bgImageHome"]);
    setHomeActive("active");
    return function () {
      setHomeActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GridContainerHome as="main">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            FRONT-END UX Developer
            <span className="d-block fs-900 ff-serif text-white">Heved</span>
          </h1>
          <p>
            As an agile developer with expertise in React frameworks, I am capable of developing the user interface of any web project, quickly and efficiently. Additionally, I am passionate about creating visual appealing designs that enhance the overall user experience. Please take a look at my current work!
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
