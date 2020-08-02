import React from 'react';
import { MdArrowForward } from "react-icons/md";

import ProfileAvatar from "../../assets/img/banco-inter-profile-avatar.png";

import {
  Container,
  ProfileImg,
  Text,
  IconContainer
} from './styles';

const HelpMe: React.FC = () => {
  return (
    <Container>
      <ProfileImg src={ProfileAvatar} />
      <Text>
        Oi, Douglas <br /> Posso te ajudar?
        </Text>
      <IconContainer>
        <MdArrowForward />
      </IconContainer>

    </Container>
  )
}

export default HelpMe;
