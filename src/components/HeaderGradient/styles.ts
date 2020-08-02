import styled from 'styled-components';

export const Container = styled.div`
    height: 6.4rem;
    width: 100%;
    background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};
`;
