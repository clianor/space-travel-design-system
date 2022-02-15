import styled from '@emotion/styled';
import React, { AnchorHTMLAttributes } from 'react';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const StyledAnchor = styled.a`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  color: hsl(var(--st-dark));
  background-color: hsl(var(--st-white));
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: hsl(var(--st-white) / 0.15);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`;

const Anchor: React.FC<AnchorProps> = (props) => {
  return <StyledAnchor {...props} />;
};

Anchor.displayName = 'Anchor';
Anchor.defaultProps = {};

export default Anchor;
