import React from "react"
import { HeaderStyled, Nav, Logo } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logo-Heved.svg"
import iconHamburger from "../Assets/Shared/icon-hamburger.svg";
import iconClose from "../Assets/Shared/icon-close.svg"

const Header = () => {
   const [toggle, setToggle] = React.useState(false)

   function toggleClick() { setToggle(!toggle) }

   const iconMenu = {
      backgroundImage: toggle ? `url(${iconClose})` : `url(${iconHamburger})`,
   };

   return (
      <HeaderStyled className="primary-header flex">
         <div>
            <Logo src={logo} alt="Heved logo" />
         </div>
         <button className="mobile-nav-toggle" onClick={toggleClick} style={iconMenu} aria-controls="primary-navigation">
            <span className="sr-only" aria-expanded={toggle}>Menu</span>
         </button>
         <Nav >
            <ul id="primary-navigation" data-visible={toggle} className="primary-navigation underline-indicators flex">
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>00</span>Home</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>01</span>Portfolio</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>02</span>Services</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>03</span>About</a></li>
            </ul>
         </Nav>
      </HeaderStyled>
   )
}

export default Header