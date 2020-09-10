import React from 'react';
import { View } from 'react-native';
import { Tag } from '../StreamCarouselList/styles';
import {
  List,
  StreamContainer,
  StreamBackground,
  Status,
  Especs,
  StreamIcon,
  StreamName,
  StreamTitle,
  TagContainer,
  PerfilContainer,
  StreamCategory,
} from './styles';
import streamList from '../../Utils/streamList';

interface ItemProps {
  item: typeof streamList[0];
}
const StreamSearchList: React.FC = () => {
  const StreamItem: React.FC<ItemProps> = ({ item }) => {
    return (
      <StreamContainer>
        <StreamBackground
          resizeMode='stretch'
          source={{ uri: `${item.perfil.source}` }}
        >
          <View>
            <Status>
              Ao Vivo
            </Status>
          </View>
          <Especs>
            {item.perfil.views} espectadores
            </Especs>
        </StreamBackground>
        <PerfilContainer>
          <StreamIcon
            source={{ uri: `${item.perfil.icon}` }}
          />
          <View>
            <StreamName>
              {item.perfil.name}
            </StreamName>
            <StreamTitle>
              {item.perfil.title}
            </StreamTitle>
            <StreamCategory>
              {item.perfil.category}
            </StreamCategory>
            <TagContainer>
              <Tag>
                {item.tag.language}
              </Tag>
            </TagContainer>
          </View>
        </PerfilContainer>
      </StreamContainer>
    );
  }
  return (
    <List>
      {streamList.map(item => {
        return (
          <StreamItem
            key={item.perfil.name}
            item={item}
          />
        );
      })}
    </List>
  );
};

export default StreamSearchList;
