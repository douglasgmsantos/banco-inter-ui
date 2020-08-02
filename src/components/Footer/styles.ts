import styled from 'styled-components';

export const Container = styled.div`
`;

export const FaleConosco = styled.div`
  background: ${p => p.theme.colors.background};
  width: 100%;
  height: 10.8rem;
  display: flex;
  justify-content: space-evenly;
  padding: ${p => p.theme.spacing.default};
  align-items:center;
  background: ${p => p.theme.colors.darkenGrey};
`;

export const FaleConoscoContainer = styled.div`
  `;

export const FaleConoscoTitle = styled.div`
  color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.huge};
  font-weight: bold;
  width: 83.2rem;
`;

export const FaleConoscoSubTitle = styled.div`
  color: ${p => p.theme.colors.background};
`;

export const Direitos = styled.div`
  color: ${p => p.theme.colors.background};
`;


export const Reclamacoes = styled.div`
  background: ${p => p.theme.colors.background};
  width: 100%;
  height: 10.8rem;
  display: flex;
  justify-content: space-evenly;
  padding: ${p => p.theme.spacing.default};
  align-items:center;
`;

export const ReclamacoesContainer = styled.div`
`;

export const ReclamacoesTitle = styled.div`
  color: ${p => p.theme.colors.darkenGrey};
  font-size: ${p => p.theme.fontSizes.huge};
  font-weight: bold;
  width: 98.2rem;
`;

export const ReclamacoesSubTitle = styled.div`
`;


export const BancoInterNortonImage = styled.img`

`;
