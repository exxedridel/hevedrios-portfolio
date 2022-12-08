import React from "react"
import { HeaderStyled, Nav, Logo } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logo-Heved.svg"
import iconHamburger from "../Assets/Shared/icon-hamburger.svg";
import iconClose from "../Assets/Shared/icon-close.svg"

const Header = () => {
   const [toggle, setToggle] = React.useState(false)

   function toggleClick() {
      setToggle(!toggle)
   }

   const translateX = {
      transform: toggle ? "translateX(0)" : "translateX(100%)",
    };

    const iconMenu = {
      backgroundImage: toggle ? `url(${iconClose})` : `url(${iconHamburger})`,
    };

   return (
      // it also had "primary-header" class for future reference, but that can be placed now in Header.style.js
      <HeaderStyled className="flex">
         <div>
            <Logo src={logo} alt="Heved logo" />
         </div>
         <button onClick={toggleClick} style={iconMenu} className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded={`${toggle}`}>Menu</span></button>
         <Nav >
            <ul style={translateX} id="primary-navigation" className="primary-navigation underline-indicators flex">
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