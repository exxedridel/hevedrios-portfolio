import { HeaderStyled, Nav, Logo } from "../Styles/Header.styles"
import logo from "../Assets/Shared/logoHeved.svg"

const Header = () => {
   return (
      // it also had "primary-header" class for future reference, but that can be placed now in Header.style.js
      <HeaderStyled className="flex">
         <div>
            <Logo src={logo} alt="Heved logo" />
         </div>
         <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
         <Nav >
            <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
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