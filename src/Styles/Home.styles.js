import styled from "styled-components";
import { GridContainer } from "./Container.styles";
import bgHomeMobile from "../Assets/Home/background-home-mobile.jpg";
import bgHomeTablet from "../Assets/Home/background-home-tablet.jpg";
import bgHomeDesktop from "../Assets/Home/background-home-desktop.jpg";

export const GridContainerHome = styled(GridContainer)`
  @media (min-width: 45em) {
    & {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
  }

  // bg-images settings
  background-size: cover;
  background-position: bottom center;
  background-image: url(${bgHomeMobile});

  @media (min-width: 35rem) {
    & {
      background-position: center center;
      background-image: url(${bgHomeTablet});
    }
  }

  @media (min-width: 45rem) {
    & {
      background-image: url(${bgHomeDesktop});
    }
  }
`;
