import styled from '@emotion/styled';
import React from 'react';
import { AccentText, Flex, Flow, Section } from './styled';

const ColorBlock = styled.div<{ color: 'dark' | 'light' | 'white' }>(
  (props) => `
    background-color: var(--st-${props.color});
    color: ${props.color === 'dark' ? 'var(--st-white)' : 'var(--st-dark)'};
    padding: 3rem 1rem 1rem; 
    border: 1px solid white;
  `,
);

function Colors() {
  return (
    <Section>
      <h2>
        <span>01</span> colors
      </h2>

      <Flex>
        <Flow>
          <ColorBlock color='dark'>#0B0D17</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 11, 13, 23
          </p>
          <p>
            <AccentText>HSL</AccentText> 230°, 35%, 7%
          </p>
        </Flow>
        <Flow>
          <ColorBlock color='light'>#D0D6F9</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 208, 214, 249
          </p>
          <p>
            <AccentText>HSL</AccentText> 231°, 77%, 90%
          </p>
        </Flow>
        <Flow>
          <ColorBlock color='white'>#FFFFFF</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 255, 255, 255
          </p>
          <p>
            <AccentText>HSL</AccentText> 0°, 0%, 100%
          </p>
        </Flow>
      </Flex>
    </Section>
  );
}

export default Colors;
