import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerServices } from "../Styles/Services.styles";

const Services = () => {
  const { setBgImage, setServicesActive } = useContext(AppContext);

  useEffect(() => {
    setBgImage("bgImageHome");
    setServicesActive("active");
    return function () {
      setServicesActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GridContainerServices>
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span>Full Stack Web Development
        </h1>
      </GridContainerServices>
      <iframe className="webapp" src="https://setapps.co/services/webapp-calculator" title="setapps webapp" width="100%" height="815px"></iframe>
    </>
  );
};

export default Services;
