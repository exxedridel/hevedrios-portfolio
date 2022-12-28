import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerServices } from "../Styles/Services.styles";
import douglasHurley from "../Assets/Services-Page/image-douglas-hurley.png";

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
    <GridContainerServices as="main" className="flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex">
        <button className="active">
          <span className="sr-only">The commander</span>
        </button>
        <button>
          <span className="sr-only">The mission specialist</span>
        </button>
        <button>
          <span className="sr-only">The pilot</span>
        </button>
        <button>
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>

      <article className="crew-details flow">
        <header className="flow flow-space--small">
          <h2 className="fs-600 ff-serif uppercase">Commander</h2>
          <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
        </header>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </article>

      <img src={douglasHurley} alt="Douglas Hurley" />
    </GridContainerServices>
  );
};

export default Services;