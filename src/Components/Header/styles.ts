import styled from 'styled-components/native';

import { Platform } from 'react-native';


import Constants from 'expo-constants';

const statusBarHeight =
    Platform.OS == 'android' ? Constants.statusBarHeight :
        0;

export const Container = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    flex-direction: row;
    padding-top: ${statusBarHeight + 'px'};
`;

export const Avatar = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;
export const PerfilIcon = styled.Image`
    border-radius: 35px;
    width: 42px;
    height: 42px;
    background-color: ${props => props.theme.colors.tag};
    border: 2px solid ${props => props.theme.colors.primary};
`;

export const OnlineStatus = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.green};
    border: 2px solid ${props => props.theme.colors.tag};

    position: absolute;
    right: 3px;
    top: 30px;
`;
export const Icons = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-right: 22px;
`;
