import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing.default};
  height: 8.0rem;
  background: ${p => p.theme.colors.background};
  margin-top: ${p => p.theme.spacing.default};
  border-radius: .8rem;
  cursor: pointer;

`;

export const ProfileImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

export const Text = styled.div``;

export const IconContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background: ${p => p.theme.colors.lightGrey};
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 2.25rem;
  color: ${p => p.theme.colors.primary};
`;

