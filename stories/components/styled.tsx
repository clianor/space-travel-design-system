import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: hsl(var(--st-dark));
  color: hsl(var(--st-white));
  padding: 2rem 4rem;

  & > h2 {
    font-family: var(--st-ff-sans-cond);
    font-size: var(--st-fs-500);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4.72px;
  }
  & > h2 span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(var(--st-white) / 0.25);
  }
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
