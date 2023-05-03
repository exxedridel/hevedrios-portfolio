import styled, { createGlobalStyle } from "styled-components";
import bgHomeMobile from "../Assets/Home/background-keys-mobile.jpg";
import bgHomeTablet from "../Assets/Home/background-keys-tablet-auto-0brigthness-dramatic.jpg";
import bgHomeDesktop from "../Assets/Home/background-keys-desktop-auto-0brigthness-dramatic.jpg";
import bgOtherMobile from "../Assets/Shared/background-portfolio.jpg";

export const BodyContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  overflow-x: hidden;
`;

export const GlobalStyles = createGlobalStyle`
/* ------------------- */
/* Custom properties   */
/* ------------------- */

:root {
  
  --clr-dark: 60 100% 0%;
  --clr-light: 68 99% 41%;
  --clr-white: 0 0% 100%;
  --clr-crimson: 348 83.3% 47.1%;
  
  /* original colors */
  /* --clr-dark: 230 35% 7%;
  --clr-light: 231 77% 90%;
  --clr-white: 0 0% 100%; */

  /* font-sizes */
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: 3rem;
  --fs-700: 1.5rem;
  --fs-600: 1rem;
  --fs-500: 1.75rem;
  --fs-400: 0.9rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  /* font-families */
  --ff-serif: "Bellefair", serif;
  --ff-sans-cond: "Barlow Condensed", sans-serif;
  --ff-sans-normal: "Barlow", sans-serif;
}

/* tablet */
@media (min-width: 35em) {
  :root {
    --fs-800: 4.2rem;
    --fs-700: 2.5rem;
    --fs-600: 1.5rem;
    --fs-400: 1rem;
  }
}

/* desktop */
@media (min-width: 45em) {
  :root {
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-400: 1.125rem;
  }
}
@media (min-width: 55em)  {
  :root {
    --fs-800: clamp(1rem, 4.2vw + 1rem, 4.5rem);
  }
}


/* -------------------------------------------- */
/*                Reset as in:                  */
/* https://piccalil.li/blog/a-modern-css-reset/ */

/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}

/* Reset font-sizes*/
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}

/* set up the body (only format properties), because webpack wont precompile the div correctly */
// those display properties are defined at the top of this file in his own styled component
body {
  background-color: hsl(var(--clr-dark));
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  line-height: 1.5;
}

/* make images easier to work with */
img,
picutre {
  max-width: 100%;
  display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ------------------- */
/* Background images   */
/* ------------------- */

/* Home */
.bgImageHome {
  background-size: cover;
  background-position: bottom center;
  background-image: url(${bgHomeMobile});
}

@media (min-width: 35rem) {
  .bgImageHome {
    background-position: center center;
    background-image: url(${bgHomeTablet});
  }
}

@media (min-width: 55rem) {
  .bgImageHome {
    background-image: url(${bgHomeDesktop});
  }
}

/* Other */
.bgImageOther {
  background-size: 260%;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${bgOtherMobile});
}

@media (min-width: 35rem) {
  .bgImageOther {
    background-size: 250%;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${bgOtherMobile});
  }
}

@media (min-width: 55rem) {
  .bgImageOther {
    background-size: 1900px;
    background-repeat: no-repeat;
    background-position-y: 275%;
    background-image: url(${bgOtherMobile});
  }
}


/* ------------------- */
/* Utility classes     */
/* ------------------- */

/* general */
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

.d-block {
  display: block;
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-space, 1rem);
}

.flow-space--small {
  --flow-space: .75rem;
}

/* The difference between :is and :where = :is gonna take the higher on specificity and apply it to the rule */
/* :where in the other hand dosent add any specificity */

/* .container {
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
} new className containers are in Container.style including body container*/ 

.center-item {
  display: flex;
  justify-content: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
}

/* colors */

.bg-dark {
  background-color: hsl(var(--clr-dark));
}
.bg-accent {
  background-color: hsl(var(--clr-light));
}
.bg-white {
  background-color: hsl(var(--clr-white));
}

.text-dark {
  color: hsl(var(--clr-dark));
}
.text-accent {
  color: hsl(var(--clr-light));
}
.text-white {
  color: hsl(var(--clr-white));
}

/* typography */

.ff-serif {
  font-family: var(--ff-serif);
}
.ff-sans-cond {
  font-family: var(--ff-sans-cond);
}
.ff-sans-normal {
  font-family: var(--ff-sans-normal);
}

.letter-spacing-1 {
  letter-spacing: 4.75px;
}
.letter-spacing-2 {
  letter-spacing: 2.7px;
}
.letter-spacing-3 {
  letter-spacing: 2.35px;
}

.uppercase {
  text-transform: uppercase;
}

.fs-900 {
  font-size: var(--fs-900);
}
.fs-800 {
  font-size: var(--fs-800);
}
.fs-700 {
  font-size: var(--fs-700);
}
.fs-600 {
  font-size: var(--fs-600);
}
.fs-500 {
  font-size: var(--fs-500);
}
.fs-400 {
  font-size: var(--fs-400);
}
.fs-300 {
  font-size: var(--fs-300);
}
.fs-200 {
  font-size: var(--fs-200);
}

.fs-900,
.fs-800,
.fs-700,
.fs-600 {
  line-height: 1.1;
}

.numbered-title {
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-500);
  text-transform: uppercase;
  letter-spacing: 4.72px;
}

.numbered-title span {
  margin-right: 0.5em;
  font-weight: 700;
  color: hsl(var(--clr-white) / 0.6);
}

/* - - - - - - - */
/* Components    */
/* - - - - - - - */

.underline-indicators > * {
  padding: var(--underline-gap, 0.5rem) 0;
  border: 0;
  cursor: pointer;
  border-bottom: 0.2rem solid hsl(var(--clr-light) / 0);
  background-color: transparent;
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
  border-color: hsl(var(--clr-white) / 0.5);
}

.underline-indicators > .active,
.underline-indicators > [aria-current="true"] {
  color: hsl(var(--clr-white) / 1);
  border-color: hsl(var(--clr-white) / 1);
}

.tab-list {
  overflow-x: auto;
  gap: 1.5rem;
}
@media  (min-width: 60em) {
  .tab-list {
    gap: 2rem;
  }
}

.dot-indicators > * {
  cursor: pointer;
  border: 0;
  padding: 0.7em;
  border-radius: 50%;
  background-color: hsl(var(--clr-white) / 0.25);
}

.dot-indicators > *:hover,
.dot-indicators > *:focus {
  background-color: hsl(var(--clr-white) / 0.5);
}

.dot-indicators > .active,
.dot-indicators > [aria-current="true"] {
  background-color: hsl(var(--clr-white) / 1);
}

.number-buttons {
  display: grid;
  padding: 0;
}

.number-buttons > * {
  font-family: var(--ff-serif);
  font-size: var(--fs-600);
  color: var(--clr-white);
  border: 1px solid hsl(var(--clr-white) / .25);
  position: relative;
  display: grid;
  place-items: center; /* shorthand for justify and align items */
  width: 5rem;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
  z-index: 1;
}

.number-buttons > *:hover,
.number-buttons > *:focus {
  border: 1px solid hsl(var(--clr-white));
}

.number-buttons > .active,
.number-buttons > [aria-selected="true"] {
  color: hsl(var(--clr-dark));
  background-color: hsl(var(--clr-white) / 1);
  border: none;
}
`;
