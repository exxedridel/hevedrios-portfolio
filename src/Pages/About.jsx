import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Container } from "../Styles/Container.styles";

const About = () => {
  
  useEffect(() => {
    const { setBgImage } = useContext(AppContext);
    setBgImage("bgImageOther");
  }, []);

  return (
    <Container>
      <h2 className="ff-serif">About</h2>
    </Container>
  );
};

export default About;
