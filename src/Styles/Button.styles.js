import styled from "styled-components";

export const ButtonLarge = styled.div`
  .large-button {
    font-size: 2rem;
    position: relative;
    z-index: 1;
    display: inline-grid;
    place-items: center; /* shorthand for justify and align items */
    padding: 0 1em;
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
    background: hsl(var(--clr-white) / 0.1);
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
      padding: 0 1.5em;
    }
  }
  @media (min-width: 45em) {
    .large-button {
      padding: 0 2em;
    }
  }
`;
