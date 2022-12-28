import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerPortfolio = styled(GridContainer)`
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
  }

  & > .tab-list {
    grid-area: tabs;
  }

  & > .destination-info {
    grid-area: content;
  }

  .destination-meta {
    flex-direction: column;
    border-top: 1px solid hsl(var(--clr-white) / 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
  }

  .destination-meta p {
    font-size: 1.75rem;
  }

  .destination-meta h3 {
    max-width: 100%;
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .destination-meta {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 55em) {
    justify-items: start;
    align-content: start;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";

    & > img {
      max-width: 90%;
    }

    .destination-meta {
      --gap: min(6vw, 6rem);
      justify-content: start;
    }
  }
`;
