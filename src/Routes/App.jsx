import { HashRouter, Routes, Route } from "react-router-dom"
import { GlobalStyles } from "../Styles/Global.styles"
import Layout from "../Containers/Layout"
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
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout >
      </HashRouter>
    </>
  );
}

export default App;
