import { HashRouter, Routes, Route } from "react-router-dom"
import AppContext from "../Context/AppContext";
import { GlobalStyles } from "../Styles/Global.styles"
import Layout from "../Containers/Layout"
import Home from "../Pages/Home"
import Portfolio from "../Pages/Portfolio"
import Services from "../Pages/Services"
import About from "../Pages/About"
import NotFound from "../Pages/NotFound"
import useAppState from "../Hooks/useAppState"

function App() {
  const appState = useAppState();
  return (
    <AppContext.Provider value={appState}>
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
