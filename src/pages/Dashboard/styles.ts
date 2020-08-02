import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  top: -35px;
  position: relative;
`;

export const Main = styled.div`
  padding: ${p => p.theme.spacing.horizontal};
`;
