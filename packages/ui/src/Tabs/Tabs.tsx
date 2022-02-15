import styled from '@emotion/styled';
import React from 'react';

export interface TabsProps {
  gap?: number;
}

const StyledTabs = styled.div<TabsProps>`
  display: flex;
  gap: ${(props) => props.gap}rem;
`;

const Tabs: React.FC<TabsProps> = (props) => {
  return <StyledTabs {...props} />;
};

Tabs.defaultProps = { gap: 2 };

export default Tabs;
