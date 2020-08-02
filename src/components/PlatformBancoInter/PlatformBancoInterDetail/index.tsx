import React from 'react';

import {
  Container,
  PlatformContainer,
  PlatformMonth,
  PlatformValue
} from './styles';

const PlatformBancoInterDetail: React.FC = () => {
  return (
    <Container>
      <PlatformContainer>
        <PlatformMonth>Total investido</PlatformMonth>
        <PlatformValue >R$ 0,00</PlatformValue>
      </PlatformContainer>

      <PlatformContainer>
        <PlatformMonth>Evolução ao mês</PlatformMonth>
        <PlatformValue >R$ 0,00</PlatformValue>
      </PlatformContainer>

    </Container>
  )
}

export default PlatformBancoInterDetail;
