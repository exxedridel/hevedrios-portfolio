import styled from "styled-components"

export const HeaderStyled = styled.header`

`

export const Logo = styled.img`
   width: 64px;
`

export const Nav = styled.nav`
.primary-navigation {
  --underline-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background: hsl( var(--clr-white) / 0.05);
  backdrop-filter: blur(1.5rem);
}

@media (max-width: 35rem) {
  .primary-navigation {
    --underline-gap: .5rem;
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    list-style: none;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    flex-direction: column;
  }
}

.primary-navigation.underline-indicators > .active {
  border: 0;
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation a > span {
  font-weight: 700;
  margin-right: 0.5em;
}
`
