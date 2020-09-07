import React, { useState } from 'react';
import { View } from 'react-native';


import { Container, Avatar, PerfilIcon, OnlineStatus, Button, Icons } from './styles';
import { Feather } from '@expo/vector-icons';

import perfilIcon from '../../images/Icons/bozoPeakBlinders.jpg';

import dark from '../../styles/themes/dark';
const Header: React.FC = () => {

  const iconStyle = {
    color: dark.colors.black,
    fontSize: 25,
  }


  return (
    <Container>
      <Avatar>
        <PerfilIcon source={perfilIcon} />
        <OnlineStatus />
      </Avatar>

      <Icons>
        <Button>
          <Feather
            name="bell"
            style={iconStyle}
          />
        </Button>
        <Button>
          <Feather
            name="message-square"
            style={iconStyle}
          />
        </Button>
        <Button style={{ marginRight: 0 }}>
          <Feather
            name="search"
            style={iconStyle}
          />
        </Button>
      </Icons>
    </Container>
  );
};

export default Header;
