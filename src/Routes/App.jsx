import { HashRouter, Routes, Route } from "react-router-dom"
import AppContext from "../Context/AppContext";
import { GlobalStyles } from "../Styles/Global.styles"
import Layout from "../Containers/Layout"
import Home from "../Pages/Home"
import Portfolio from "../Pages/Portfolio"
import Services from "../Pages/Services"
import About from "../Pages/About"
import NotFound from "../Pages/NotFound"
import usePageFunctionality from "../Hooks/usePageFunctionality"

function App() {
  const pageFunctionality = usePageFunctionality();
  return (
    <AppContext.Provider value={pageFunctionality}>
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
    </AppContext.Provider>
  );
}

export default App;
