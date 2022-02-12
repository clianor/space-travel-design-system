import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: var(--st-dark);
  color: var(--st-white);
  padding: 2rem 4rem;

  & > h2 {
    font-family: var(--st-ff-sans-cond);
    font-size: var(--st-fs-500);
    text-transform: uppercase;
    letter-spacing: 4.72px;
  }
  & > h2 span {
    margin-right: 0.5em;
    font-weight: 700;
    color: var(--st-gray);
  }
`;

const Container = styled.div`
  display: flex;
  gap: var(--gap, 1rem);
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

const ColorBlock = styled.div<{ color: 'dark' | 'light' | 'white' }>(
  (props) => `
    background-color: var(--st-${props.color});
    color: ${props.color === 'dark' ? 'var(--st-white)' : 'var(--st-dark)'};
    padding: 3rem 1rem 1rem; 
    border: 1px solid white;
  `,
);

const AccentText = styled.span`
  color: var(--st-light);
`;

function Colors() {
  return (
    <Section>
      <h2>
        <span>01</span> colors
      </h2>

      <Container>
        <Wrapper>
          <ColorBlock color='dark'>#0B0D17</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 11, 13, 23
          </p>
          <p>
            <AccentText>HSL</AccentText> 230°, 35%, 7%
          </p>
        </Wrapper>
        <Wrapper>
          <ColorBlock color='light'>#D0D6F9</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 208, 214, 249
          </p>
          <p>
            <AccentText>HSL</AccentText> 231°, 77%, 90%
          </p>
        </Wrapper>
        <Wrapper>
          <ColorBlock color='white'>#FFFFFF</ColorBlock>
          <p>
            <AccentText>RGB</AccentText> 255, 255, 255
          </p>
          <p>
            <AccentText>HSL</AccentText> 0°, 0%, 100%
          </p>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Colors;
