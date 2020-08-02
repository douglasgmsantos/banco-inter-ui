import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: ${p => p.theme.spacing.default}; */
`;

export const FinancialContainer = styled.div`
  padding: ${p => p.theme.spacing.vertical};
`;

export const FinancialMonth = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
`;

interface IFinancialValueProps {
  income: boolean;
}

export const FinancialValue = styled.div<IFinancialValueProps>`
  color: ${p => p.income ? p.theme.colors.danger : p.theme.colors.success};
`;
