import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: ${p => p.theme.spacing.default}; */
`;

export const PlatformContainer = styled.div`
  padding: ${p => p.theme.spacing.vertical};
`;

export const PlatformMonth = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
`;

export const PlatformValue = styled.div`
  font-weight: bold;
  color: ${p => p.theme.colors.mediumGrey};
`;
