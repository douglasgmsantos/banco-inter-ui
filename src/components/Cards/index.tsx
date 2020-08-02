import React from 'react';
import { MdPayment } from 'react-icons/md';
import { FiBarChart2 } from 'react-icons/fi';
import { FiRefreshCcw, FiCreditCard, FiUmbrella, FiGift } from 'react-icons/fi';
import { BsArrowRightShort } from 'react-icons/bs';

import {
  Container,
  Card,
  CardIcon,
  CardText,
  ShowContainer,
  IconArrow
} from './styles';
import theme from '../../styles/theme';

const cards = [
  {
    title: "Transferência",
    icon: <FiRefreshCcw size={24} color={theme.colors.primary} />
  },
  {
    title: "Pagamentos",
    icon: <MdPayment size={24} color={theme.colors.primary} />
  },
  {
    title: "Investimentos",
    icon: <FiBarChart2 size={24} color={theme.colors.primary} />
  },
  {
    title: "Cartões",
    icon: <FiCreditCard size={24} color={theme.colors.primary} />
  },
  {
    title: "Gift Card",
    icon: <FiGift size={24} color={theme.colors.primary} />
  },
  {
    title: "Seguros",
    icon: <FiUmbrella size={24} color={theme.colors.primary} />
  },

]

const Cards: React.FC = () => {
  return (
    <Container>
      {cards.map(card => (
        <Card key={card.title}>
          <CardIcon>
            {card.icon}
          </CardIcon>
          <CardText>{card.title}</CardText>
        </Card>
      ))}
      <ShowContainer>
        <IconArrow>
          <BsArrowRightShort size={24} />
        </IconArrow>
      </ShowContainer>
    </Container>
  )
}

export default Cards;
