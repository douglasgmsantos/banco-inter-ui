import React from 'react';
import { MdVisibility } from 'react-icons/md';

import PlatformBancoInterAsset from '../../assets/img/banco-inter-internetbanking.png';
import PlatformBancoInterDetail from './PlatformBancoInterDetail';
import PlatformBancoInterChart from './PlatformBancoInterChart';


import {
  Container,
  Header,
  PlatformBancoInterImg,
  TitleContainer,
  Title,
  Main

} from './styles';


const PlatformBancoInter: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <PlatformBancoInterImg src={PlatformBancoInterAsset} />
          <Title>Plataforma Aberta Inter</Title>
        </TitleContainer>
        <MdVisibility size={16} style={{ cursor: "pointer" }} />
      </Header>
      <Main>
        <PlatformBancoInterChart />
        <PlatformBancoInterDetail />
      </Main>
    </Container>
  )
}

export default PlatformBancoInter;
