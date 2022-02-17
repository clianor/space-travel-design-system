import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import React, { forwardRef, HTMLAttributes } from 'react';

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'size'> {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '0' | '1' | '2' | '3';
  isUpperCase?: boolean;
}

type InnerPropsType = HeadingProps & Pick<Required<HeadingProps>, 'as' | 'size' | 'isUpperCase'>;

const StyledHeading = styled.h2<InnerPropsType>`
  font-size: ${(props) => `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}
  ${(props) => props.isUpperCase && 'text-transform: uppercase;'}
  
  & > .numbered {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(var(--st-white) / 0.25);
  }
`;

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { ...rest } = props as InnerPropsType;
  return <StyledHeading ref={ref} {...rest} />;
});

Heading.displayName = 'Heading';
Heading.defaultProps = {
  as: 'h2',
  size: 'lg',
  isUpperCase: false,
};

export default Heading;
