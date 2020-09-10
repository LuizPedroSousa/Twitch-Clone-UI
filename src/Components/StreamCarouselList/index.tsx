import React, { useContext } from 'react';
import { Text, Image } from 'react-native';
import { ThemeContext } from 'styled-components';
import {
  Container,
  StreamItemContainer,
  Status,
  StreamBackground,
  Espectadores,
  InfoContainer,
  Channel,
  Info,
  LanguageContainer,
  Tag
} from './styles';


import Carousel from 'react-native-snap-carousel';
import streamSearch from '../../Utils/streamCarousel';

import * as animatable from 'react-native-animatable';

interface ItemProps {
  item: typeof streamSearch[0];
  index: number;
}

const StreamCarouselList: React.FC = () => {

  const { colors } = useContext(ThemeContext);
  const StreamContainerAnim = animatable.createAnimatableComponent(StreamItemContainer);
  const StreamItem: React.FC<ItemProps> = ({ item, index }) => {
    return (
      <StreamContainerAnim
        useNativeDriver={true}
        animation='bounceInRight'
        duration={3000}
      >
        <StreamBackground
          resizeMode='cover'
          source={{ uri: `${item.source}` }}
        >
          <Status>
            Ao vivo
          </Status>
          <Espectadores>
            {item.espec} espectadores
          </Espectadores>
        </StreamBackground>
        <InfoContainer>
          <Channel>
            {item.name}
          </Channel>
          <Info>
            transmitindo
          </Info>
          <Channel>
            {item.category}
          </Channel>
        </InfoContainer>
        <LanguageContainer>
          <Tag>
            {item.language}
          </Tag>
          <Tag
            style={
              item.mode == undefined
                ?
                { backgroundColor: colors.primary }
                :
                { backgroundColor: colors.tag }
            }
          >
            {item.mode}
          </Tag>
          <Tag
            style={
              item.partida == undefined
                ?
                { backgroundColor: colors.primary }
                :
                { backgroundColor: colors.tag }
            }
          >
            {item.partida}
          </Tag>
        </LanguageContainer>
      </StreamContainerAnim >
    );
  }
  return (
    <Container>
      <Carousel
        data={streamSearch}
        layout={'default'}
        enableSnap={true}
        itemWidth={250}
        sliderWidth={350}
        firstItem={1}
        renderItem={StreamItem}
        autoplay={true}
        fadingEdgeLength={20}
        inactiveSlideOpacity={0.5}
        autoplayInterval={5000}
        enableMomentum={true}
      />
    </Container>
  );
};

export default StreamCarouselList;
