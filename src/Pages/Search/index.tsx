import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Main, Container, Heading } from './styles';
import Header from './../../Components/Header/index';

const Search: React.FC = () => {
  return (
    <Wrapper>
      <Main>
        <Header />
      </Main>
      <Container>
        <Heading>Search</Heading>
      </Container>
    </Wrapper>
  );
};

export default Search;
