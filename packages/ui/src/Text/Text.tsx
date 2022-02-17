import styled from '@emotion/styled';
import { Fonts, LetterSpacing, Sizes } from '@space-travel-design-system/ui/types';
import React, { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'pre';
  size?: keyof typeof Sizes;
  fonts?: keyof typeof Fonts;
  spacing?: '0' | '1' | '2' | '3';
  isUpperCase?: boolean;
}

type InnerPropsType = TextProps & Pick<Required<TextProps>, 'size' | 'isUpperCase'>;

const StyledText = styled.p<InnerPropsType>`
  font-size: ${(props) => `var(${Sizes[props.size]});`};
  ${(props) => props.fonts && `font-family: var(${Fonts[props.fonts]});`}
  ${(props) => props.spacing && `letter-spacing: ${LetterSpacing[`letter-spacing-${props.spacing}`]};`}
  ${(props) => props.isUpperCase && 'text-transform: uppercase;'}
`;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { ...rest } = props as InnerPropsType;
  return <StyledText ref={ref} {...rest} />;
});

Text.displayName = 'Text';
Text.defaultProps = {
  size: 'md',
  isUpperCase: false,
};

export default Text;
