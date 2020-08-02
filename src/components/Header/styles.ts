import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.background};
  height: 104px;
  display: flex;
  justify-content:space-around;
  align-items:center;

`;

export const BancoInterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BancoInterLogo = styled.img`
  width: 111px;
  height: 40px;
  margin-right: ${p => p.theme.spacing.default};
`;

export const BancoInterText = styled.div``;

export const BancoInterSecondaryContainer = styled.div`
  display: flex;
  align-items:center;
`;

export const Profile = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
`;

export const SimulationRF = styled.button`
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.secondary};
  height: 40px;
  width: 173px;
  border-radius: 5px;

  :hover, :focus {
    background: ${p => p.theme.colors.background};
    border: 1px solid ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.primary};
  }
`;

export const ProfileAvatar = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background: ${p => p.theme.colors.lightGrey};
  color: ${p => p.theme.colors.secondary};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: ${p => p.theme.spacing.default};
`;

export const IconOpen = styled.div`
  margin-left: ${p => p.theme.spacing.default};
`;
