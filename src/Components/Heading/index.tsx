import React from 'react';
import { Text } from 'react-native';

import { Container, HeadingText } from './styles';

import * as animatable from 'react-native-animatable';
const Heading: React.FC = ({ children }) => {
  const ContainerAnim = animatable.createAnimatableComponent(Container);
  return (
    <ContainerAnim
      useNativeDriver
      animation='bounceInDown'
      duration={3000}
    >
      <HeadingText>{children}</HeadingText>
    </ContainerAnim>
  );
};

export default Heading;
