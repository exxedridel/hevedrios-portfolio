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
    <Container>
      <h2 className="ff-serif">Setapps.co</h2>
    </Container>
  );
};

export default Services;
