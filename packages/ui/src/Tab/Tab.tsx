import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import classNames from 'classnames';
import React, { AnchorHTMLAttributes } from 'react';

interface TabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  active?: boolean;
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '1' | '2' | '3';
}

const StyledTab = styled.a<TabProps>`
  cursor: pointer;
  padding: 0.5rem 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(var(--st-white) / 0);
  background-color: transparent;
  text-transform: uppercase;
  text-decoration: none;
  color: hsl(var(--st-light));
  font-size: ${(props) => props.size && `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}

  &:hover,
  &:focus {
    border-color: hsl(var(--st-white) / 0.5);
  }

  &.active {
    color: hsl(var(--st-white));
    border-color: hsl(var(--st-white) / 1);
  }

  & > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`;

const Tab: React.FC<TabProps> = ({ children, active, ...rest }) => {
  return (
    <StyledTab className={classNames({ active: active })} {...rest}>
      {children}
    </StyledTab>
  );
};

export default Tab;
