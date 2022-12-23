import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Container } from "../Styles/Container.styles";

const About = () => {
  const { setBgImage } = useContext(AppContext);

  useEffect(() => {
    setBgImage("bgImageOther");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2 className="ff-serif">About</h2>
    </Container>
  );
};

export default About;
