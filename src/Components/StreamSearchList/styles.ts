import styled from 'styled-components/native';
import { shade, lighten } from 'polished';
export const List = styled.View`
    padding: 14px 0 14px;
`;

export const StreamContainer = styled.View`
    margin: 14px  0 0;
`;
export const StreamBackground = styled.ImageBackground`
    flex: 1;
    height: 180px;
    justify-content: space-between;
    padding: 10px 10px 10px;
`;

export const Status = styled.Text`
    max-width: 65px;
    color: ${props => props.theme.colors.black};
    text-align: center;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.red};
    text-transform: uppercase;
    opacity: 0.7;
    font-family: Roboto_400Regular;
`;
export const Especs = styled.Text`
    color: ${props => props.theme.colors.black};
    max-width: 150px;
    padding: 2px;
    opacity: 0.8;
    text-align: center;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.tag};
`;

export const PerfilContainer = styled.View`
    margin: 14px 0;
    flex-direction: row;
`;
export const StreamIcon = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 48px;
    margin-right: 10px;
`;
export const StreamName = styled.Text`
    color: ${props => props.theme.colors.black};
    font-family: Roboto_500Medium;
    margin: 0 0 4px;
`;
export const StreamTitle = styled.Text`
    color: ${props => shade(0.2, props.theme.colors.black)};
    font-family: Roboto_400Regular;
    margin: 0 0 4px;
`;

export const StreamCategory = styled.Text`
    color: ${props => lighten(0.4, props.theme.colors.primary)};
    font-family: Roboto_400Regular;

`;

export const TagContainer = styled.View`
    flex-direction: row;
    padding: 8px 0 0;
`;