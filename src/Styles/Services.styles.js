import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerServices = styled(GridContainer)`
  --flow-space: 2rem;
  grid-template-areas:
  "title";

  .numbered-title {
    grid-area: title;
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  @media (min-width: 55em) {
    justify-items: start;
    align-content: start;
    grid-template-areas:
      ". title title .";
  }

`;