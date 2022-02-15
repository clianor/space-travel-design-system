import styled from '@emotion/styled';
import { LetterSpacing } from '@space-travel-design-system/ui/types';
import classNames from 'classnames';
import React from 'react';

interface TabProps {
  active?: boolean;
  label: string;
}

const StyledTab = styled.a`
  cursor: pointer;
  padding: 0.5rem 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(var(--st-white) / 0);
  background-color: transparent;
  text-transform: uppercase;
  font-family: var(--st-ff-sans-cond);
  color: hsl(var(--st-light));
  letter-spacing: ${LetterSpacing[`letter-spacing-2`]};

  &:hover,
  &:focus {
    border-color: hsl(var(--st-white) / 0.5);
  }

  &.active {
    color: hsl(var(--st-white));
    border-color: hsl(var(--st-white) / 1);
  }
`;

const Tab: React.FC<TabProps> = ({ active, label }) => {
  return <StyledTab className={classNames({ active: active })}>{label}</StyledTab>;
};

export default Tab;
