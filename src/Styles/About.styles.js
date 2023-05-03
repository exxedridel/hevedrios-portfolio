import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerAbout = styled(GridContainer)`
  --flow-space: 2rem;
  background-color: hsl(var(--clr-dark) /0.5);
  backdrop-filter: blur(4px);
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  .numbered-title {
    grid-area: title;
  }

  img {
    grid-area: image;
    max-width: 85%;
    border: 2px solid hsl(var(--clr-white) / 1);
    border-radius: 50%;
    background-color: hsl(var(--clr-crimson) /0.5);
    
  }

  .dot-indicators {
    grid-area: tabs;
    --gap: 1.7rem;
  }

  .about-details {
    grid-area: content;
  }

  .about-details h2 {
    opacity: .6;
  }

  @media (min-width: 35em) {
    background-color: transparent;
    backdrop-filter: blur(0px);
    padding-bottom: 0;
    padding-top: 2rem;
    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";

    .numbered-title {
      justify-self: start;
    }

    & > img {
      max-width: 60%;
    }
  }

  @media (min-width: 55em) {
    padding-top: 0.35rem;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";

    img {
      max-width: 100%;
      max-height: auto;
      align-self: start;
    }

    .dot-indicators {
      justify-self: start;
    }
  }
`;
