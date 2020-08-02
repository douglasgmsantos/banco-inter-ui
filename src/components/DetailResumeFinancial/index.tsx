import React from 'react';

import {
  Container,
  FinancialContainer,
  FinancialMonth,
  FinancialValue
} from './styles';

const DetailResumeFinancial: React.FC = () => {
  return (
    <Container>
      <FinancialContainer>
        <FinancialMonth>Receita - Agosto</FinancialMonth>
        <FinancialValue income={true}>R$ 8.543,98</FinancialValue>
      </FinancialContainer>

      <FinancialContainer>
        <FinancialMonth>Despesas - Agosto</FinancialMonth>
        <FinancialValue income={false}>R$ 7.987,22</FinancialValue>
      </FinancialContainer>

    </Container>
  )
}

export default DetailResumeFinancial;
