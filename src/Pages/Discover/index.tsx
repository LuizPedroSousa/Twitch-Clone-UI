import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Container, Main, Heading } from './styles';
import Header from '../../Components/Header/index';

const Discover: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
        </Main>
        <Heading>Discover</Heading>
      </Container>
    </Wrapper>
  );
};

export default Discover;
