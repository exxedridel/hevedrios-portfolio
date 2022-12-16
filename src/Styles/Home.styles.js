import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerHome = styled(GridContainer)`
  & > *:first-child {
    padding-top: .65rem;
  }

  & > *:last-child {
    padding-top: 1.5rem;
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
