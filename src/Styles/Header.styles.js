import styled from "styled-components";

export const HeaderStyled = styled.header`
  justify-content: space-between;
  align-items: center;

  .mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 35rem) {
    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent;
      // conditional background-image over component
      background-repeat: no-repeat;
      background-position: center;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }

    .mobile-nav-toggle:focus-visible {
      outline: 3px solid hsl(var(--clr-light));
      outline-offset: 4px;
    }
  }
`;

export const Logo = styled.img`
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  width: 48px;
`;

export const Nav = styled.nav`
  .primary-navigation {
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    // fallback in case browser dont supports certain properties
    background: hsl(var(--clr-dark) / 0.95);
  }
  // if browser supports this properties, then:
  @supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
      background: hsl(var(--clr-white) / 0.05);
      backdrop-filter: blur(1.5rem);
    }
  }

  .primary-navigation a {
    text-decoration: none;
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
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
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;
    }
    .primary-navigation[data-visible="true"] {
      transform: translateX(0);
    }
  }

  @media (min-width: 35em) and (max-width: 45em) {
  }
`;
