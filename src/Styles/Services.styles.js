import styled from "styled-components";
import { GridContainer } from "../Styles/Container.styles";

export const GridContainerServices = styled(GridContainer)`
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
    max-width: 60%;
    border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
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
    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";

    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  @media (min-width: 45em) {
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";

    & > img {
      max-width: 90%;
      /* align-self: end; */
    }

    & > .dot-indicators {
      justify-self: start;
    }
  }
`;
