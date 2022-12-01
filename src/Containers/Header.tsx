import { HeaderStyled, Nav, Logo } from "../Styles/Header.style"
import logo from "../Assets/Shared/H-logo-72.png"

const Header = () => {
   return (
      // it also had "primary-header" class for future reference, but that can be placed now in Header.style.js
      <HeaderStyled className="flex">
         <div>
            {/* <img src={H_logo} alt="Heved logo" className="logo"/> */}
            <Logo src={logo} alt="logo"/>
         </div>
         <Nav >
            <ul className="primary-navigation underline-indicators flex">
               <li className="active"><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>00</span>Home</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>01</span>Portfolio</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>02</span>Services</a></li>
               <li><a className="uppercase ff-sans-cond text-white letter-spacing-2" href="/"><span>03</span>About</a></li>
            </ul>
         </Nav>
      </HeaderStyled>
   )
}

export default Header