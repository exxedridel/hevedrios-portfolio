import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerHome = styled(GridContainer)`
  & > *:last-child {
    padding-top: 1.2rem;
  }

  @media (min-width: 45em) {
    & {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
    & > *:first-child {
      grid-column: 2;
    }

    & > *:last-child {
      grid-column: 3;
    }
  }
`;
