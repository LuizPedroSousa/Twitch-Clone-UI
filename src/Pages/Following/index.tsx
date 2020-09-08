import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { Wrapper, Main, Container } from './styles';
import Header from './../../Components/Header/index';
import Heading from './../../Components/Heading/index';
import Title from './../../Components/Title/index';
import CategoryList from './../../Components/CategoryList/index';
import StreamList from './../../Components/StreamList/index';
import OffChannelsList from './../../Components/OffChannelsList';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const Items: Item[] = [
      {
        key: 'Page_heading',
        render: () => <Heading>Seguindo</Heading>
      },
      {
        key: 'Followed_category',
        render: () => <Title>CATEGORIAS SEGUIDAS</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList /> },
      {
        key: 'Chanels_live',
        render: () => <Title>CANAIS AO VIVO</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'Offiline_Chanels',
        render: () => <Title>CANAIS OFFILINE</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <OffChannelsList />
      }
    ]

    //Content indexes to titles
    const indexes: number[] = [];
    Items.forEach((item, index) => item.isTitle && indexes.push(index));
    return {
      data: Items,
      indexes
    }
  }, []);


  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            // Refresh Effect
            onRefresh={() => { }}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
