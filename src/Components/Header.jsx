import { useState, useContext } from "react"
import AppContext from "../Context/AppContext"
import { Link } from "react-router-dom"
import { SkipToContent, Logo, HeaderStyled } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logo-Heved.svg"
import iconHamburger from "../Assets/Shared/icon-hamburger.svg"
import iconClose from "../Assets/Shared/icon-close.svg"

const Header = () => {
   const { mainFocus } = useContext(AppContext);
   const [toggle, setToggle] = useState(false)

   function toggleClick() { setToggle(!toggle) }

   const iconMenu = {
      backgroundImage: toggle ? `url(${iconClose})` : `url(${iconHamburger})`,
   };

   return (
      <>
         <SkipToContent onClick={mainFocus}>Skip to content</SkipToContent>
         <HeaderStyled className="primary-header flex">
            <div>
               <Logo src={logo} alt="Heved logo" />
            </div>
            <button className="mobile-nav-toggle" onClick={toggleClick} style={iconMenu} aria-controls="primary-navigation">
               <span className="sr-only" aria-expanded={toggle}>Menu</span>
            </button>
            <nav >
               <ul id="primary-navigation" data-visible={toggle} className="primary-navigation underline-indicators flex">
                  <li className="active"><Link to="/" className="uppercase ff-sans-cond text-white letter-spacing-2"><span aria-hidden="true">00</span>Home</Link></li>
                  <li><Link to="portfolio" className="uppercase ff-sans-cond text-white letter-spacing-2"><span aria-hidden="true">01</span>Portfolio</Link></li>
                  <li><Link to="services" className="uppercase ff-sans-cond text-white letter-spacing-2"><span aria-hidden="true">02</span>Services</Link></li>
                  <li><Link to="about" className="uppercase ff-sans-cond text-white letter-spacing-2"><span aria-hidden="true">03</span>About</Link></li>
               </ul>
            </nav>
         </HeaderStyled>
      </>
   )
}

export default Header