import React from 'react';
import ResumeFinancial from '../ResumeFinancial';
import CreditCard from '../CreditCard';
import PlatformBancoInter from '../PlatformBancoInter';

import { Container } from './styles';

const CardsInfo: React.FC = () => {
  return (
    <Container>
      <ResumeFinancial />
      <CreditCard />
      <PlatformBancoInter />
    </Container>
  )
}

export default CardsInfo;
