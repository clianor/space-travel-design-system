import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import React, { CSSProperties } from 'react';

export interface TabsProps {
  gap?: number | string;
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '1' | '2' | '3';
  style?: CSSProperties;
}

const StyledTabs = styled.div<TabsProps>`
  display: flex;
  gap: ${(props) => (Number(props.gap) ? `${Number(props.gap)}rem` : props.gap)};
  font-size: ${(props) => props.size && `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}
`;

const Tabs: React.FC<TabsProps> = (props) => {
  return <StyledTabs {...props} />;
};

Tabs.defaultProps = {
  gap: 2,
  spacing: '2',
  size: 'md',
  fonts: 'sans-cond',
};

export default Tabs;
