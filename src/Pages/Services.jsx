import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Container } from "../Styles/Container.styles";

const Services = () => {
  const { setBgImage, setServicesActive } = useContext(AppContext);

  useEffect(() => {
    setBgImage("bgImageOther");
    setServicesActive("active");
    return function () {
      setServicesActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span>Full Stack Web Development
        </h1>
      </Container>
      <iframe className="webapp" src="https://setapps.co/services/webapp-calculator" width="100%" height="700px"></iframe>
    </>
  );
};

export default Services;
