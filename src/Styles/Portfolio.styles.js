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

  .image-link {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-link img {
    max-width: 70%;
    border: 1px solid hsl(var(--clr-white) / 0.2);
  }

  & > .tab-list {
    grid-area: tabs;
    & button {
      letter-spacing: 1.3px;
    }
  }

  & > .destination-info {
    grid-area: content;
  }

  .destination-meta {
    flex-direction: column;
    border-top: 1px solid hsl(var(--clr-white) / 0.1);
    padding-top: 2rem;
    margin-top: 2rem;
  }

  .destination-meta p {
    font-size: 1.75rem;
  }

  .destination-meta h3 {
    max-width: 100%;
  }

  .meta-link a {
    text-decoration: none;
    & > * {
      color: black;
    }
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .image-link img {
      max-width: 80%;
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

    .image-link {
      justify-content: start;
      align-items: start;
    }

    .image-link img {
      max-width: 90%;
    }

    .destination-meta {
      --gap: min(6vw, 6rem);
      justify-content: start;
    }
  }
`;
