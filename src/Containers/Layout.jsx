import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { BodyContainer } from "../Styles/Global.styles";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  const { bgImage } = useContext(AppContext);

  return (
    <BodyContainer className={bgImage}>
      <Header />
      {children}
    </BodyContainer>
  );
};

export default Layout;
