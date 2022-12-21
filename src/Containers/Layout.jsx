
import { BodyContainer } from "../Styles/Global.styles";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  
  const bgImage = "bgImageHome";

  return (
    <BodyContainer className={bgImage}>
      <Header />
      {children}
    </BodyContainer>
  );
};

export default Layout;
