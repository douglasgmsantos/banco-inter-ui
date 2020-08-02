import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.background};
  border-radius: 0.8rem;
  width: 84.0rem;
  height: 34.2rem;
  padding: ${p => p.theme.spacing.default};
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Shopping = styled.div`
  background: ${p => p.theme.colors.lightGrey};
  width: 35.2rem;
  height: 8.8rem;
  border-radius: 0.8rem;
  padding: ${p => p.theme.spacing.default};
  display: flex;
  justify-content: space-between;
  align-items:center;
  cursor: pointer;
`;

export const ShoppingHeader = styled.div``;

export const ShoppingTitle = styled.div`
  font-size: ${p => p.theme.fontSizes.huge};
  font-weight: bold;
`;

export const ShoppingDescription = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
  margin-top: 0.8rem;
`;


export const ListIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  cursor: pointer;
    :focus, :hover {
      .extra-icon-container{
          border: 1px solid ${p => p.theme.colors.secondary};
      }
      .extra-icon-title{
          color: ${p => p.theme.colors.secondary};
      }
    }

`;

export const IconeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: ${p => p.theme.colors.lightGrey};
  width: 6.0rem;
  height: 6.0rem;
  border-radius: 3.5rem;
  margin: ${p => p.theme.spacing.horizontal};
`;



export const IconTitle = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
`;

export const HomeEquityBancoInter = styled.div`
    background: ${p => p.theme.colors.primary};
    width: 38.4rem;
    height: 18.4rem;
    border-radius: 0.8rem;
    padding: ${p => p.theme.spacing.default};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HomeEquityBancoInterTitle = styled.div`
    color: #FFED00;
    font-size: ${p => p.theme.fontSizes.huge};
    font-weight: bold;
`;

export const HomeEquityBancoInterFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HomeEquityBancoInterDescriptions = styled.div`

`;

export const HomeEquityBancoInterDescriptionContainer = styled.div`
    display: flex;
`;

export const HomeEquityBancoInterDescription = styled.div`
  display: flex;
  color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.huge};
`;


export const PayrollLoans = styled.div`
  background: ${p => p.theme.colors.secondary};
  width: 38.4rem;
  height: 18.4rem;
  border-radius: 0.8rem;
  padding: ${p => p.theme.spacing.default};
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;

export const PayrollLoansTitle = styled.div`
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.huge};
  color: ${p => p.theme.colors.background};
`;

export const PayrollLoansSubTitle = styled.div`
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.huge};
  color: #FFED00;
`;

export const PayrollLoansFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PayrollLoansDescriptionContainer = styled.div`
    display: flex;
`;

export const PayrollLoansDescription = styled.div`
  display: flex;
  color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.huge};
`;


export const Bold = styled.div`
    font-weight: bold;
    margin: 0 .5rem;
`;


export const BtnRequestNow = styled.button`
    background: #FFED00;
    color: #867E1A;
    font-size: ${p => p.theme.fontSizes.default};
    width: 10.8rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    border: 0px;
`;

