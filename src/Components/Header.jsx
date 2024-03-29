import { useState, useContext, useEffect, useRef } from "react"
import AppContext from "../Context/AppContext"
import { Link } from "react-router-dom"
import { SkipToContent, Logo, HeaderStyled } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logo-Heved.svg"
import iconHamburger from "../Assets/Shared/icon-hamburger.svg"
import iconClose from "../Assets/Shared/icon-close.svg"

const Header = () => {
   const { mainFocus, homeActive, portfolioActive, servicesActive, aboutActive } = useContext(AppContext);
   const [toggle, setToggle] = useState(false)
   const refMenu = useRef(null)

   useEffect(() => {
      document.addEventListener("click", handleClickOutside, true)
   }, [])

   function handleClickOutside(e) {
      if (!refMenu.current.contains(e.target)) {
         // toggleClick()
         setToggle(false)
      }
   }

   function closeClick() {
      setToggle(false)
   }

   function toggleClick() { setToggle(!toggle) }

   const iconMenu = {
      backgroundImage: toggle ? `url(${iconClose})` : `url(${iconHamburger})`,
   };

   return (
      <>
         <SkipToContent onClick={mainFocus}>Skip to content</SkipToContent>
         <HeaderStyled className="primary-header flex" ref={refMenu}>
            <div>
               <Link to="/"><Logo src={logo} onClick={closeClick} alt="Heved logo" /></Link>
            </div>
            <button className="mobile-nav-toggle" onClick={toggleClick} style={iconMenu} aria-controls="primary-navigation">
               <span className="sr-only" aria-expanded={toggle}>Menu</span>
            </button>
            <nav>
               <ul id="primary-navigation" data-visible={toggle} className="primary-navigation underline-indicators flex">
                  <Link to="/" className={homeActive}><li className="uppercase ff-sans-cond text-white letter-spacing-2" onClick={toggleClick}><span aria-hidden="true">00</span>Home</li></Link>
                  <Link to="portfolio" className={portfolioActive}><li className="uppercase ff-sans-cond text-white letter-spacing-2" onClick={toggleClick}><span aria-hidden="true">01</span>Portfolio</li></Link>
                  <Link to="services" className={servicesActive}><li className="uppercase ff-sans-cond text-white letter-spacing-2" onClick={toggleClick}><span aria-hidden="true">02</span>Services</li></Link>
                  <Link to="about" className={aboutActive}><li className="uppercase ff-sans-cond text-white letter-spacing-2" onClick={toggleClick}><span aria-hidden="true">03</span>About</li></Link>
               </ul>
            </nav>
         </HeaderStyled>
      </>
   )
}

export default Header