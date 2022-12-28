import styled from "styled-components";

export const SkipToContent = styled.button`
  position: absolute;
  z-index: -1;
  background: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
  text-decoration: underline;
  padding: 0.5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;

  &:focus {
    z-index: 9999;
    transform: translateY(0%);
  }
`;

export const Logo = styled.img`
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  width: 48px;
`;

export const HeaderStyled = styled.header`
  justify-content: space-between;
  align-items: center;

  .primary-navigation {
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl(var(--clr-white) / 0.05);
    backdrop-filter: blur(1.5rem);
  }

  .primary-navigation a {
    text-decoration: none;
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
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
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;
    }

    .primary-navigation[data-visible="true"] {
      transform: translateX(0);
    }

    /* .primary-navigation.underline-indicators > .active {
      border: 0;
    } */

    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent;
      // conditional background-image is in Header.tsx
      background-repeat: no-repeat;
      background-position: center;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }

    .mobile-nav-toggle:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }
  }

  @media (min-width: 35em) {
    .primary-navigation {
      padding-inline: clamp(3rem, 7vw, 7rem);
    }
  }

  @media (min-width: 35em) and (max-width: 54.999em) {
    .primary-navigation a > span {
      display: none;
    }
  }

  @media (min-width: 55em) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      background: hsl(var(--clr-white) / 0.25);
      order: 1;
    }

    nav {
      order: 2;
    }

    .primary-navigation {
      margin-block: 2rem;
    }
  }
`;
