import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
`;

export const GridContainer = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;

  & * {
    max-width: 50ch;
  }

  @media (min-width: 45em) {
    & {
      text-align: left;
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr);
    }
    & > *:first-child {
      grid-column: 2;
      /* outline: 1px solid red; */
    }

    & > *:last-child {
      grid-column: 3;
      /* outline: 1px solid yellow; */
    }
  }
`;
