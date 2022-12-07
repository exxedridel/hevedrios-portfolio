import DesignSystem from "../Design/DesignSystem";
import { HashRouter, Routes, Route } from "react-router-dom"
import { GlobalStyles, BodyContainer } from "../Styles/Global.styles"
import Header from "../Components/Header"
import Home from "../Pages/Home"
import Portfolio from "../Pages/Portfolio"
import Services from "../Pages/Services"
import About from "../Pages/About"
import NotFound from "../Pages/NotFound"

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <BodyContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            // temporal route
            <Route path="design-system" element={<DesignSystem />} />
          </Routes>
        </BodyContainer>
      </HashRouter>
    </>
  );
}

export default App;
