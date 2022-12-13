import { useState, useRef, ReactHTMLElement } from "react";
import { SkipToContent, Logo, HeaderStyled } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logo-Heved.svg"
import iconHamburger from "../Assets/Shared/icon-hamburger.svg"
import iconClose from "../Assets/Shared/icon-close.svg"

const Header = () => {
   const [toggle, setToggle] = useState(false)
   // const mainContentRef = useRef(null);

   function scrollClick() {
      console.log("should scroll to main content")
      // mainContentRef.current.focus();
   }

   function toggleClick() { setToggle(!toggle) }

   const iconMenu = {
      backgroundImage: toggle ? `url(${iconClose})` : `url(${iconHamburger})`,
   };

   return (
      <>
         <SkipToContent onClick={scrollClick}>Skip to content</SkipToContent>
         <HeaderStyled className="primary-header flex">
            <div>
               <Logo src={logo} alt="Heved logo" />
            </div>
            <button className="mobile-nav-toggle" onClick={toggleClick} style={iconMenu} aria-controls="primary-navigation">
               <span className="sr-only" aria-expanded={toggle}>Menu</span>
            </button>
            <nav >
               <ul id="primary-navigation" data-visible={toggle} className="primary-navigation underline-indicators flex">
                  <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span aria-hidden="true">00</span>Home</a></li>
                  <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span aria-hidden="true">01</span>Portfolio</a></li>
                  <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span aria-hidden="true">02</span>Services</a></li>
                  <li ><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span aria-hidden="true">03</span>About</a></li>
                  {/* ref={mainContentRef} */}
               </ul>
            </nav>
         </HeaderStyled>
      </>
   )
}

export default Header