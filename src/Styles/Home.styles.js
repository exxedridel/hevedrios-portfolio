import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerHome = styled(GridContainer)`
  & span {
    color: hsl(var(--clr-crimson));
  }

  & > *:first-child {
    padding-top: .65rem;
  }

  & > *:last-child {
    padding-top: 1.5rem;
  }

  @media (min-width: 35em) {
    & {
      padding-top: 1rem;
    }
  }

  @media (min-width: 55em) {
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
