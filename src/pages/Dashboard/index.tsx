import React from 'react';

import Header from '../../components/Header';
import HeaderGradient from '../../components/HeaderGradient';
import Menu from '../../components/Menu';


import {
  Container,
  Content
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeaderGradient />
      <Content>
        <Menu />

      </Content>
    </Container>
  )
}

export default Dashboard;
