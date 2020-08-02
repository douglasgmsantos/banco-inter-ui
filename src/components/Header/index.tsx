import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import {
  Container,
  BancoInterContainer,
  BancoInterLogo,
  BancoInterText,
  BancoInterSecondaryContainer,
  Profile,
  SimulationRF,
  ProfileAvatar,
  IconOpen

} from './styles';

import Logo from '../../assets/img/banco-inter-logo.png'


const Header: React.FC = () => {
  return (
    <Container>
      <BancoInterContainer>
        <BancoInterLogo src={Logo} />
        <BancoInterText>Internet Banking</BancoInterText>
      </BancoInterContainer>
      <BancoInterSecondaryContainer>
        <SimulationRF>Simulador Renda Fixa</SimulationRF>
        <Profile>
          <ProfileAvatar>DG</ProfileAvatar>
          <IconOpen>
            <RiArrowDownSLine />
          </IconOpen>
        </Profile>
      </BancoInterSecondaryContainer>
    </Container>
  )
}

export default Header;
