import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;
  padding-inline: 2rem;
  margin-inline: auto;
  max-width: 80rem;

  @media (min-width: 35em) {
    & {
      padding-top: 2rem;
    }
  }
`;

export const GridContainer = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2.5rem;

  & * {
    max-width: 50ch;
  }

  @media (min-width: 55em) {
    & {
      text-align: left;
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
          1rem,
          1fr
        );
    }
  }
`;
