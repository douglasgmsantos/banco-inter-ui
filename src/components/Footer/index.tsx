import React from 'react';

import BancoInterNorton from '../../assets/img/banco-inter-norton.png';

import {
  Container,
  FaleConosco,
  FaleConoscoContainer,
  FaleConoscoTitle,
  FaleConoscoSubTitle,
  Direitos,

  Reclamacoes,
  ReclamacoesContainer,
  ReclamacoesTitle,
  ReclamacoesSubTitle,

  BancoInterNortonImage
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FaleConosco>
        <FaleConoscoContainer>
          <FaleConoscoTitle>Fale Conosco</FaleConoscoTitle>
          <FaleConoscoSubTitle>Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais Regiões) | Horário de Atendimento: 08:00h às 20:00h.</FaleConoscoSubTitle>
        </FaleConoscoContainer>
        <Direitos>
          ® Todos os direitos reservados
        </Direitos>
      </FaleConosco>
      <Reclamacoes>
        <ReclamacoesContainer>
          <ReclamacoesTitle>Para reclamações, sugestões ou cancelamento de produtos e serviços:</ReclamacoesTitle>
          <ReclamacoesSubTitle>
            Central de Relacionamento: 3003 4070 / 0800 940 0007 <br />
            Deficiente de Fala e Audição: 0800 979 7099
          </ReclamacoesSubTitle>
        </ReclamacoesContainer>
        <BancoInterNortonImage src={BancoInterNorton} />
      </Reclamacoes>

    </Container>
  )
}

export default Footer;
