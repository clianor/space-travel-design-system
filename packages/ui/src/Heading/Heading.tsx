import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import React, { PropsWithChildren } from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '1' | '2' | '3';
  isUpperCase?: boolean;
}

const StyledHeading = styled.h2<HeadingProps & Required<Pick<HeadingProps, 'size' | 'isUpperCase'>>>`
  font-size: ${(props) => `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}
  ${(props) => props.isUpperCase && 'text-transform: uppercase;'}
`;

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { ...rest } = props as PropsWithChildren<
    HeadingProps & Pick<Required<HeadingProps>, 'as' | 'size' | 'isUpperCase'>
  >;
  return <StyledHeading ref={ref} {...rest} />;
});

Heading.displayName = 'Heading';
Heading.defaultProps = {
  as: 'h2',
  size: 'lg',
  isUpperCase: false,
};

export default Heading;
