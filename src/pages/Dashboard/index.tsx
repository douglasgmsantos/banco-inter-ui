import React from 'react';

import Header from '../../components/Header';
import HeaderGradient from '../../components/HeaderGradient';
import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import CardsInfo from '../../components/CardsInfo';
import Extra from '../../components/Extra';


import {
  Container,
  Content,
  Main
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderGradient />
      <Content>
        <Menu />
        <Main>
          <Cards />
          <CardsInfo />
          <Extra />
        </Main>
      </Content>
    </Container>
  )
}

export default Dashboard;
