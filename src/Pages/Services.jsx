import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerServices } from "../Styles/Services.styles";

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
    <GridContainerServices>
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>Full Stack Web Development
      </h1>
    </GridContainerServices>
  );
};

export default Services;
