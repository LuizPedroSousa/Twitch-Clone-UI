import React from 'react';
import { View, FlatList } from 'react-native';

import { Wrapper, Container, Main } from './styles';
import Header from '../../Components/Header/index';
import Heading from './../../Components/Heading/index';
import Title from './../../Components/Title/index';
import StreamSeachList from './../../Components/StreamSeachList/index';
import CategoryList from './../../Components/CategoryList/index';
import categoriesSearch from '../../Utils/categoriesSearch';
import CategorySearchList from '../../Components/CategorySearchList';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: true;
}
const Discover: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const Items: Item[] = [
      {

        key: 'Page_Heading',
        render: () => <Heading >Descubra</Heading>
      },
      {
        key: 'Carousel',
        render: () => <StreamSeachList />
      },
      {
        key: 'Categories_Like',
        render: () => <Title >Categorias que achamos que você vai gostar</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <CategorySearchList/> },
      {
        key: 'Channels_Like',
        render: () => <Title >Canais ao vivo que achamos que você vai gostar</Title>
      },
      { key: 'C2', render: () => <View /> },
    ];

    const indexes: number[] = [];

    Items.forEach((item, index) => item.isTitle && indexes.push(index));
    return {
      data: Items,
      indexes,
    }
  }, []);
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}

            onRefresh={() => { }}
            refreshing={false}
          >

          </FlatList>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Discover;
