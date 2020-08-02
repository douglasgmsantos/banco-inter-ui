import React from 'react';
import theme from '../../styles/theme';
import { FiCreditCard } from 'react-icons/fi';
import { MdVisibility } from 'react-icons/md';

import CreditCardImg from "../../assets/img/banco-inter-credit-card.png";

import {
  Container,
  Header,
  TitleContainer,
  Title,
  Main,
  BancoInterCreditCard,
  BancoInterCreditCardText
} from './styles';

const CreditCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <FiCreditCard size={16} color={theme.colors.primary} />
          <Title>Mastercard</Title>
        </TitleContainer>
        <MdVisibility size={16} style={{ cursor: "pointer" }} />
      </Header>
      <Main>
        <BancoInterCreditCard src={CreditCardImg} />
        <BancoInterCreditCardText>
          Seu cartão é Mastercard e sem anuidade!
          </BancoInterCreditCardText>
      </Main>
    </Container>
  )
}

export default CreditCard;
