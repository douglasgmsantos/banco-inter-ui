import styled from 'styled-components';

import { GoGraph } from "react-icons/go";
import { MdVisibility } from "react-icons/md";


export const Container = styled.div`
  width: 30.4rem;
  background: #FFF;
  border-radius: 8px;
  padding: ${p => p.theme.spacing.huge};
`;

export const Balance = styled.div`
  background: ${p => p.theme.colors.lightGrey};
  padding: ${p => p.theme.spacing.default};
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-radius: 8px;
`;

export const BalanceDetail = styled.div``;

export const BalanceText = styled.div`
  font-size: ${p => p.theme.fontSizes.default};

`;

export const BalanceValue = styled.div`
  display: flex;
  margin-top: .5rem;
`;

export const Bold = styled.div`
  font-weight: bold;
  margin-left: .5rem;
`;

export const IconVisibility = styled(MdVisibility)`
  color: ${p => p.theme.colors.secondary};
  cursor: pointer;
`;


export const VisibilityBalance = styled.div`
  background: ${p => `linear-gradient(90deg, ${p.theme.colors.secondary} 0%, ${p.theme.colors.primary} 100%)`};
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${p => p.theme.spacing.default};
`;

export const VisibilityBalanceText = styled.div`
  color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.default};
`;

export const IconGoGraph = styled(GoGraph)`
  color: ${p => p.theme.colors.background};
`;

export const ItemMenuContainer = styled.div`
`;

export const ItemMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  cursor: pointer;
  padding: ${p => p.theme.spacing.vertical};

  :focus, :hover {
    color: ${p => p.theme.colors.primary};
  }
`;

export const ItemMenuIcon = styled.div`
  background: ${p => p.theme.colors.lightGrey};
  height: 38px;
  width: 38px;
  border-radius: 19px;
  display: flex;
  justify-content: center;
  align-items:center;

`;

export const ItemMenuTextContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex: 1;
  padding: ${p => p.theme.spacing.horizontal};
`;

export const ItemMenuText = styled.div`
  font-size: ${p => p.theme.fontSizes.default};
`;

export const ItemMenuOpenIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
`;
