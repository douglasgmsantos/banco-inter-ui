import React from 'react';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { TiHome, TiTicket } from 'react-icons/ti';
import { FiSmartphone } from 'react-icons/fi';
import { RiCarLine } from 'react-icons/ri';
import { FaBasketballBall } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

import theme from '../../styles/theme';

import {
  Container,
  Line,
  Shopping,
  ListIcons,
  IconContainer,
  IconeContainer,
  IconTitle,

  ShoppingHeader,
  ShoppingTitle,
  ShoppingDescription,

  HomeEquityBancoInter,
  HomeEquityBancoInterTitle,
  HomeEquityBancoInterFooter,
  HomeEquityBancoInterDescriptions,
  HomeEquityBancoInterDescriptionContainer,
  HomeEquityBancoInterDescription,

  PayrollLoans,
  PayrollLoansTitle,
  PayrollLoansSubTitle,
  PayrollLoansFooter,
  PayrollLoansDescriptionContainer,
  PayrollLoansDescription,

  BtnRequestNow,
  Bold

} from './styles';

const icons = [
  {
    name: "Transporte",
    Icone: TiHome,
  },
  {
    name: "Entretenimento",
    Icone: TiTicket
  },
  {
    name: "Tecnologia",
    Icone: FiSmartphone
  },
  {
    name: "Transporte",
    Icone: RiCarLine
  },
  {
    name: "Esporte",
    Icone: FaBasketballBall
  },

];

const Extra: React.FC = () => {
  return (
    <Container>
      <Line>
        <Shopping>
          <FiShoppingCart color={theme.colors.primary} size={24} />
          <ShoppingHeader>
            <ShoppingTitle>Shopping</ShoppingTitle>
            <ShoppingDescription>
              Aproveite os produtos <br /> com cashback!
            </ShoppingDescription>
          </ShoppingHeader>
          <FiArrowRight color={theme.colors.primary} size={24} />
        </Shopping>
        <ListIcons>
          {icons.map(({ Icone, name }) => (
            <IconContainer>
              <IconeContainer className="extra-icon-container">
                <Icone color={theme.colors.secondary} size={24} />
              </IconeContainer>
              <IconTitle className="extra-icon-title">{name}</IconTitle>
            </IconContainer>
          ))}

        </ListIcons>
      </Line>
      <Line>
        <HomeEquityBancoInter>
          <HomeEquityBancoInterTitle>
            Home Equity Banco Inter
          </HomeEquityBancoInterTitle>
          <HomeEquityBancoInterFooter>
            <HomeEquityBancoInterDescriptions>
              <HomeEquityBancoInterDescriptionContainer>
                <MdKeyboardArrowRight color={"#FFED00"} size={20} />
                <HomeEquityBancoInterDescription>
                  Taxa Pré-Fixada <Bold>1%</Bold>
                </HomeEquityBancoInterDescription>
              </HomeEquityBancoInterDescriptionContainer>
              <HomeEquityBancoInterDescriptionContainer>
                <MdKeyboardArrowRight color={"#FFED00"} size={20} />
                <HomeEquityBancoInterDescription>
                  Até <Bold>84 meses</Bold> para pagar
                </HomeEquityBancoInterDescription>
              </HomeEquityBancoInterDescriptionContainer>
            </HomeEquityBancoInterDescriptions>
            <BtnRequestNow> Solitar Agora</BtnRequestNow>
          </HomeEquityBancoInterFooter>

        </HomeEquityBancoInter>
        <PayrollLoans>
          <PayrollLoansTitle>Quer ficar livre dos juros altos? </PayrollLoansTitle>
          <PayrollLoansSubTitle>
            Empréstimo Consignado,<br /> o crédito  para seu momento
          </PayrollLoansSubTitle>
          <PayrollLoansFooter>
            <PayrollLoansDescriptionContainer>
              <MdKeyboardArrowRight color={"#FFED00"} size={20} />
              <PayrollLoansDescription>
                Taxa a partir <Bold>1,30%</Bold> ao mês
              </PayrollLoansDescription>
            </PayrollLoansDescriptionContainer>
            <BtnRequestNow> Solitar Agora</BtnRequestNow>
          </PayrollLoansFooter>
        </PayrollLoans>
      </Line>
    </Container>
  )
}

export default Extra;
