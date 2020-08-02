import React from 'react';

import Chart from "../../../assets/img/chart-plataforma.png";

import {
  Container,
  ChartImage
} from './styles';

const PlatformBancoInterChart: React.FC = () => {
  return <Container>
    <ChartImage src={Chart} />
  </Container>
}

export default PlatformBancoInterChart;
