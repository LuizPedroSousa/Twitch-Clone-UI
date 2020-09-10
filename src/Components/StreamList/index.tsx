import React from 'react';
import { Text } from 'react-native';

import thumb from '../../Utils/streamFollowing';
import {
  List,
  StreamContainer,
  Thumbnail,
  Views,
  RedCircle,
  Status,
  StreamColum,
  PerfilRow,
  Description,
  Category,
  Language,
  Icon,
  Name,
} from './styles';

import * as animatable from 'react-native-animatable';

interface StreamProps {
  item: typeof thumb[0];
}
const StreamList: React.FC = () => {
  const StreamItem: React.FC<StreamProps> = ({ item }) => {
    const StreamContainerAnim = animatable
      .createAnimatableComponent(StreamContainer);
    return (
      <StreamContainerAnim
        useNativeDriver={true}
        animation='zoomIn'
        duration={3500}
      >
        <Thumbnail source={item.source}>
          <Status>
            <Views >{item.views}</Views>
            <RedCircle />
          </Status>
        </Thumbnail>
        <StreamColum>
          <PerfilRow>
            <Icon source={item.perfil} />
            <Name >
              {item.name}
            </Name>
          </PerfilRow>
          <Description>
            {item.description}
          </Description>
          <Category>
            {item.category}
          </Category>
          <Language>
            {item.language}
          </Language>
        </StreamColum>
      </StreamContainerAnim>
    );
  }
  return (
    <List
      showsVerticalScrollIndicator={false}
    >
      {thumb.map(item => {
        return (
          <StreamItem key={item.name} item={item} />
        );
      })}
    </List>
  );
};

export default StreamList;
