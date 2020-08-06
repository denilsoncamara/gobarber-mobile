import React from 'react';
import { Image, Text } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>SignIn</Text>
    </Container>
  );
};

export default SignIn;
