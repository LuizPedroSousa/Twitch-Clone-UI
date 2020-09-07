import React from 'react';

import { Wrapper, Main, Container, Heading } from './styles';
import Header from './../../Components/Header/index';

const Esports: React.FC = () => {
  return (
    <Wrapper>
      <Main>
        <Header />
      </Main>
      <Container>
        <Heading>Discover</Heading>
      </Container>
    </Wrapper>
  );
};

export default Esports;
