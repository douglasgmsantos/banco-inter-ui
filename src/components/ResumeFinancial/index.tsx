import React from 'react';
import theme from '../../styles/theme';
import { RiFileList3Line } from 'react-icons/ri';
import { MdVisibility } from 'react-icons/md';

import ChartResumeFinancial from '../ChartResumeFinancial';
import DetailResumeFinancial from '../DetailResumeFinancial';


import {
  Container,
  Header,
  TitleContainer,
  Title,
  Main

} from './styles';

const ResumeFinancial: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <RiFileList3Line size={16} color={theme.colors.primary} />
          <Title>Extrato</Title>
        </TitleContainer>
        <MdVisibility size={16} style={{ cursor: "pointer" }} />
      </Header>
      <Main>
        <ChartResumeFinancial />
        <DetailResumeFinancial />
      </Main>
    </Container>
  )
}

export default ResumeFinancial;
