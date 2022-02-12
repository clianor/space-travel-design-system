import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import React, { PropsWithChildren } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '1' | '2' | '3';
  isUpperCase?: boolean;
}

const StyledText = styled.p<TextProps & Required<Pick<TextProps, 'size' | 'isUpperCase'>>>`
  font-size: ${(props) => `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}
  ${(props) => props.isUpperCase && 'text-transform: uppercase;'}
`;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { ...rest } = props as PropsWithChildren<TextProps & Pick<Required<TextProps>, 'size' | 'isUpperCase'>>;
  return <StyledText ref={ref} {...rest} />;
});

Text.displayName = 'Text';
Text.defaultProps = {
  size: 'md',
  isUpperCase: false,
};

export default Text;
