import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
`;

export const GridContainer = styled.div`
  border: 5px solid limegreen;
  display: grid;

  @media (min-width: 45rem) {
    & {
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(2rem, 1fr);
    }
    & > *:first-child {
      grid-column: 2;
      outline: 1px solid red;
    }
  
    & > *:last-child {
      grid-column: 3;
      outline: 1px solid yellow;
    }
  }
`;
