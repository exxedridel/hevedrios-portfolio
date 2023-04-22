import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerAbout = styled(GridContainer)`
  --flow-space: 2rem;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  .numbered-title {
    grid-area: title;
  }

  & > img {
    grid-area: image;
    max-width: 85%;
    border: 1px solid hsl(var(--clr-white) / 0.1);
    border-radius: 50%;
  }

  & > .dot-indicators {
    grid-area: tabs;
  }

  & > .crew-details {
    grid-area: content;
  }

  .crew-details h2 {
    opacity: .5;
  }

  @media (min-width: 35em) {
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

    & > img {
      max-width: 100%;
      max-height: auto;
      align-self: start;
    }

    & > .dot-indicators {
      justify-self: start;
    }
  }
`;
