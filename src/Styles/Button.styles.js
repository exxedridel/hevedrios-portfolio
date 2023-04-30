import styled from "styled-components";

export const ButtonLarge = styled.div`
  .large-button {
    font-size: 2rem;
    position: relative;
    background: hsl(var(--clr-white) /0.1);
    color: white;
    backdrop-filter: blur(8px);
    border: 2px solid hsl(var(--clr-white) / 1);
    z-index: 1;
    display: inline-grid;
    place-items: center; /* shorthand for justify and align items */
    padding: 0 0.7em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
  }

  .large-button::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%; /* optional approach to aspect-ratio */
    height: 100%;
    background: hsl(var(--clr-white) /0.1);
    border-radius: 50%; /* or :inherit */
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  .large-button:hover::after,
  .large-button:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  .large-button:focus-visible {
    outline: none;
  }

  @media (min-width: 35em) {
    .large-button {
      padding: 0 1.2em;
    }
  }
  @media (min-width: 55em) {
    .large-button {
      padding: 0 1.7em;
    }
  }
`;

export const ButtonPill = styled.button`
  /* & {
    position: relative;
    z-index: 1;
    background-color: hsl(var(--clr-white));
    font-size: var(--fs-200);
    border: none;
    color: black;
    padding: 6px 20px 3px;
    place-items: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
  } */

  & {
    background-color: hsl(var(--clr-white) / 0.9);
    font-size: var(--fs-200);
    position: relative;
    z-index: 1;
    display: inline-grid;
    min-width: 23ch;
    place-items: center;
    padding: 6px 20px 4px;
    border-radius: 16px;
    /* aspect-ratio: 1; */
  }

  & a {
    text-decoration: none;
    color: black;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl(var(--clr-white) / 0.1);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  &:focus-visible {
    outline: none;
  }
`;
