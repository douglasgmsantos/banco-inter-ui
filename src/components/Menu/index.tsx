import React from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineTablet } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { FiPieChart, FiUmbrella } from 'react-icons/fi'
import { MdSmartphone } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
import theme from '../../styles/theme';


import {
  Container,
  Balance,
  BalanceDetail,
  BalanceText,
  BalanceValue,
  Bold,
  IconVisibility,
  VisibilityBalance,
  VisibilityBalanceText,
  IconGoGraph,
  ItemMenuContainer,
  ItemMenuTextContainer,
  ItemMenu,
  ItemMenuIcon,
  ItemMenuText,
  ItemMenuOpenIcon
} from './styles';

const menus = [
  {
    name: "Conta digital",
    icon: <AiOutlineTablet size={20} color={theme.colors.primary} />
  },
  {
    name: "Crédito",
    icon: <FaDollarSign size={20} color={theme.colors.primary} />
  },
  {
    name: "Investimentos",
    icon: <BsGraphUp size={20} color={theme.colors.primary} />
  },
  {
    name: "IDTVM",
    icon: <FiPieChart size={20} color={theme.colors.primary} />
  },
  {
    name: "Seguros",
    icon: <FiUmbrella size={20} color={theme.colors.primary} />
  },
  {
    name: "Recarga de celular",
    icon: <MdSmartphone size={20} color={theme.colors.primary} />
  },
  {
    name: "Segurança",
    icon: <RiSecurePaymentLine size={20} color={theme.colors.primary} />
  }
]

const Menu: React.FC = () => {
  return (
    <Container>
      <Balance>
        <BalanceDetail>
          <BalanceText>Saldo em conta</BalanceText>
          <BalanceValue>R$ <Bold> 1.000.000,00</Bold> </BalanceValue>
        </BalanceDetail>
        <IconVisibility size={20} />
      </Balance>
      <VisibilityBalance>
        <VisibilityBalanceText>Ver total investido</VisibilityBalanceText>
        <IconGoGraph size={20} />
      </VisibilityBalance>
      <ItemMenuContainer>
        {menus.map(menu => (
          <ItemMenu key={menu.name}>
            <ItemMenuIcon>
              {menu.icon}
            </ItemMenuIcon>
            <ItemMenuTextContainer>
              <ItemMenuText>{menu.name}</ItemMenuText>
              <ItemMenuOpenIcon>
                <IoIosArrowDown size={20} />
              </ItemMenuOpenIcon>
            </ItemMenuTextContainer>
          </ItemMenu>
        ))}
      </ItemMenuContainer>
    </Container>
  )
}

export default Menu;
