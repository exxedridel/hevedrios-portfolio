import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerPortfolio = styled(GridContainer)`
  --flow-space: 2rem;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

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
`;
