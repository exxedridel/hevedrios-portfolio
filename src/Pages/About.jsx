import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Container } from "../Styles/Container.styles";

const About = () => {
  const { setBgImage, setAboutActive } = useContext(AppContext);

  useEffect(() => {
    setBgImage("bgImageOther");
    setAboutActive("active");
    return function () {
      setAboutActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2 className="ff-serif">About</h2>
    </Container>
  );
};

export default About;
