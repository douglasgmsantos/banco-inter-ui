import React from 'react';

import ChartBalance from "../../assets/img/chart-balance.png";

import {
  Container,
  ChartBalanceImage
} from './styles';

const ChartResumeFinancial: React.FC = () => {
  return (
    <Container>
      <ChartBalanceImage src={ChartBalance} />
    </Container>
  )
}

export default ChartResumeFinancial;
