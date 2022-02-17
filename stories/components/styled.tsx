import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: hsl(var(--st-dark));
  color: hsl(var(--st-white));
  padding: 2rem 4rem;
`;

export const Flex = styled.div`
  display: flex;
  gap: var(--gap, 1rem);
`;

export const Flow = styled.div`
  flex-basis: 100%;
  & > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }
`;

export const AccentText = styled.span`
  color: hsl(var(--st-light));
`;
