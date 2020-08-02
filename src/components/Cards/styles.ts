import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 12.0rem;
  height: 12.0rem;
  border-radius: 0.8rem;
  background: ${p => p.theme.colors.background};
  padding: ${p => p.theme.spacing.default};
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin-right: .9rem;
  cursor: pointer;

  :focus, :hover {
    border: 1px solid ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.primary};
  }
`;

export const CardIcon = styled.div`
  height: 6.4rem;
  width: 6.4rem;
  background: ${p => p.theme.colors.lightGrey};
  border-radius: 3.2rem;
  display: flex;
  align-items:center;
  justify-content:center;
  color: ${p => p.theme.colors.primary};
`;

export const CardText = styled.div`
  font-size: ${p => p.theme.fontSizes.default};
`;

export const ShowContainer = styled.div`
  display: flex;
  align-items:flex-end;
`;

export const IconArrow = styled.div`
  background: ${p => p.theme.colors.background};
  height: 3.0rem;
  width: 3.0rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  color: ${p => p.theme.colors.primary};
`;
