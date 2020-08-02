import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.background};
  width: 26.4rem;
  height: 17.6rem;
  padding: ${p => p.theme.spacing.default};
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Header = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: ${p => p.theme.fontSizes.default};
  margin-left: .5rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
