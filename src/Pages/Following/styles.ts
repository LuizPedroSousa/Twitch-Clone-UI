import styled from 'styled-components/native';
import { shade } from 'polished';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.primary};
`;

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    margin: 0 14px;
`;
export const Main = styled.View`
    flex: 1;
`;