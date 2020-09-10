import React, { useState, useContext } from 'react';

import { Container, Avatar, PerfilIcon, OnlineStatus, Button, Icons } from './styles';
import { Feather } from '@expo/vector-icons';

import perfilIcon from '../../images/Icons/bozoPeakBlinders.jpg';

import { Switch } from 'react-native-switch';
import dark from '../../styles/themes/dark';
import context from '../../styles/themes/themeContext';
const Header: React.FC = () => {


  const { theme, setTheme } = useContext(context);

  const iconStyle = {
    color: theme.colors.black,
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
