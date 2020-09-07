import React from 'react';
import { View } from 'react-native';

import {
  List,
  ChannelsContainer,
  ChannelIcon,
  ChannelTitle,
  ChannelVideos,
  ChannelContent,
  Circle
} from './styles';

import felpsIcon from '../../images/Streaming/Icons/Felpinho.jpg';
import calango from '../../images/Streaming/Icons/Calango.jpg';
import cellbit from '../../images/Streaming/Icons/zerbit.jpg';
interface ChannelsProps {
  name: string;
  info: string;
  img: typeof felpsIcon;
}

const OffChannelsList: React.FC = () => {
  const ChannelsItem: React.FC<ChannelsProps> = ({ name, img, info }) => {
    return (
      <ChannelsContainer>
        <ChannelContent>
          <ChannelIcon source={img} />
          <View>
            <ChannelTitle>
              {name}
            </ChannelTitle>
            <ChannelVideos>
              {info} novos videos
          </ChannelVideos>
          </View>
        </ChannelContent>
        <Circle />
      </ChannelsContainer>
    );
  }
  return (
    <List>
      <ChannelsItem
        name='Felps'
        img={felpsIcon}
        info='5'
      />
      <ChannelsItem
        name='Calango'
        img={calango}
        info='10'
      />
      <ChannelsItem
        name='Cellbit'
        img={cellbit}
        info='2'
      />
    </List>
  );
};

export default OffChannelsList;
