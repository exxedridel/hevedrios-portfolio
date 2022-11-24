// import DesignSystem from "../Design/DesignSystem";
import { GlobalStyles } from "../Design/GlobalStyles.style"
import Header from "../Containers/Header"
import Home from "../Pages/Home"

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      {/* <DesignSystem /> */}
    </>
  );
}

export default App;
