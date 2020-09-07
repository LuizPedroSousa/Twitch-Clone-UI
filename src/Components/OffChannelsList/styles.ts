import styled from 'styled-components/native';
import { shade } from 'polished';
export const List = styled.ScrollView`
    padding: 0 14px 0;
`;

export const ChannelsContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 16px;
`;
export const ChannelContent = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Circle = styled.View`
    width: 16px;
    height: 16px;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 20px;
    background-color: ${props => shade(0.2, props.theme.colors.black)};
`;
export const ChannelIcon = styled.Image`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 10px;
`;
export const ChannelVideos = styled.Text`
    color: ${props => props.theme.colors.gray};
    font-family: Roboto_700Bold;
    font-size: 16px;
`;

export const ChannelTitle = styled.Text`
    color: ${props => props.theme.colors.black};
`;
