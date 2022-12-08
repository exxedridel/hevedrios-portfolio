import styled from "styled-components";
import iconHamburguer from "../Assets/Shared/icon-hamburger.svg"

export const HeaderStyled = styled.header`
  @media (max-width: 35rem) {
    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent;
      background-image: url(${iconHamburguer});
      background-repeat: no-repeat;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 48px;
`;

export const Nav = styled.nav`
  .primary-navigation {
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    // fallback in case browser dont supports
    background: hsl(var(--clr-dark) / 0.95);
  }

  // if browser supports, then:
  @supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
      background: hsl(var(--clr-white) / 0.05);
      backdrop-filter: blur(1.5rem);
    }
  }

  .mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 35rem) {
    .primary-navigation {
      --underline-gap: 0.5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      margin: 0;
      flex-direction: column;
      transform: translateX(100%)
    }
  }

  .primary-navigation a {
    text-decoration: none;
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`;
