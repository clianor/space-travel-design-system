import React from 'react';
import { css, Global } from '@emotion/react';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Barlow:wght@400;700&family=Bellefair&display=swap');

  :root {
    /* colors */
    --st-dark: hsl(230 35% 7%);
    --st-light: hsl(231 77% 90%);
    --st-white: hsl(0 0% 100%);
    --st-gray: hsl(0 0% 100% / 0.25);

    /* font-sizes */
    --st-fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
    --st-fs-800: 3.5rem;
    --st-fs-700: 1.5rem;
    --st-fs-600: 1rem;
    --st-fs-500: 1rem;
    --st-fs-400: 0.9375rem;
    --st-fs-300: 1rem;
    --st-fs-200: 0.875rem;

    /* font-families */
    --st-ff-serif: 'Bellefair', serif;
    --st-ff-sans-cond: 'Barlow Condensed', sans-serif;
    --st-ff-sans-normal: 'Barlow', sans-serif;
  }
`;

const GlobalStyle: React.FC = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
