import styled from '@emotion/styled';
import { Sizes } from '@space-travel-design-system/ui/types';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';

export interface DotProps {
  active?: boolean;
  gap?: number | string;
  size?: keyof typeof Sizes;
  style?: CSSProperties;
}

const StyledDot = styled.button<DotProps>`
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background-color: hsl(var(--st-white) / 0.25);

  &:hover,
  &:focus {
    background-color: hsl(var(--st-white) / 0.5);
  }

  &.active {
    background-color: hsl(var(--st-white) / 1);
  }

  & > span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const Dot: React.FC<DotProps> = ({ active, ...rest }) => {
  return (
    <StyledDot className={classNames({ active: active })} {...rest}>
      <span />
    </StyledDot>
  );
};

export default Dot;
