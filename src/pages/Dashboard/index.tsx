import React from 'react';

import Header from '../../components/Header';
import HeaderGradient from '../../components/HeaderGradient';
import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import CardsInfo from '../../components/CardsInfo';
import Extra from '../../components/Extra';
import HelpMe from '../../components/HelpMe';
import Footer from '../../components/Footer';


import {
  Container,
  Content,
  Main,
  MenuContainer
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderGradient />
      <Content>
        <MenuContainer>
          <Menu />
          <HelpMe />
        </MenuContainer>
        <Main>
          <Cards />
          <CardsInfo />
          <Extra />
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}

export default Dashboard;
