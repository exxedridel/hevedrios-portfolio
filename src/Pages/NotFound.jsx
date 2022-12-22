import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import { Container } from "../Styles/Container.styles"

const NotFound = () => {
  
  useEffect(() => {
    const { setBgImage } = useContext(AppContext);
    setBgImage("bgImageOther");
  },[])

  return (
    <Container><h2>Error 404: Not Found</h2></Container>
  )
}

export default NotFound