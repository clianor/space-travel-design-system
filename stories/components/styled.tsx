import styled from '@emotion/styled';

export const Section = styled.section`
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
    color: hsl(0 0% 100% / 0.25);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: var(--gap, 1rem);
`;

export const Wrapper = styled.div`
  flex-basis: 100%;
  & > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }
`;

export const AccentText = styled.span`
  color: var(--st-light);
`;
