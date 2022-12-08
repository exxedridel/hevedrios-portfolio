import styled from "styled-components";
import { GridContainer } from "./Container.styles";

export const GridContainerHome = styled(GridContainer)`
  @media (min-width: 45em) {
    & {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
  }
`;
