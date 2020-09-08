import React from 'react';
import { Text } from 'react-native';

import { Container, TitleText } from './styles';
import * as animatable from 'react-native-animatable';
const Title: React.FC = ({ children }) => {
  const ContainerAnim = animatable.createAnimatableComponent(Container);
  return (
    <ContainerAnim
      useNativeDriver
      animation='bounceInLeft'
      duration={2000}
    >
      <TitleText>{children}</TitleText>
    </ContainerAnim>
  );
};

export default Title;
