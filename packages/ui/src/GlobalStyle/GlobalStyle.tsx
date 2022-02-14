import { css, Global } from '@emotion/react';
import React from 'react';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Barlow:wght@400;700&family=Bellefair&display=swap');

  :root {
    /* colors */
    --st-dark: hsl(230 35% 7%);
    --st-light: hsl(231 77% 90%);
    --st-white: hsl(0 0% 100%);

    /* font-sizes */
    --st-fs-900: 8rem;
    --st-fs-800: 5rem;
    --st-fs-700: 3rem;
    --st-fs-600: 2rem;
    --st-fs-500: 1.25rem;
    --st-fs-400: 1rem;
    --st-fs-300: 0.875rem;
    --st-fs-200: 0.75rem;

    /* font-families */
    --st-ff-serif: 'Bellefair', serif;
    --st-ff-sans-cond: 'Barlow Condensed', sans-serif;
    --st-ff-sans-normal: 'Barlow', sans-serif;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const GlobalStyle: React.FC = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
