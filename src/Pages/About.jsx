import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { GridContainerServices } from "../Styles/About.styles";
import douglasHurley from "../Assets/About-Page/image-douglas-hurley.webp";

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
    <GridContainerServices as="main" className="flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> how I am
      </h1>

      <div className="dot-indicators flex">
        <button className="active">
          <span className="sr-only">Bachelor of Computer Science</span>
        </button>
        <button>
          <span className="sr-only">Front-end certificate</span>
        </button>
        <button>
          <span className="sr-only">English certificate</span>
        </button>
        <button>
          <span className="sr-only">Curriculum Vitae</span>
        </button>
      </div>

      <article className="crew-details flow">
        <header className="flow flow-space--small">
          <h2 className="fs-600 ff-serif uppercase">BCS.</h2>
          <p className="fs-700 uppercase ff-serif text-accent">Heved Ríos</p>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste
          unde, eveniet ex cum pariatur earum magni hic accusantium eos
          exercitationem beatae nostrum voluptatibus praesentium aliquid atque
          sit id totam.
        </p>
      </article>

      <img src={douglasHurley} alt="Douglas Hurley" />
    </GridContainerServices>
  );
};

export default About;
