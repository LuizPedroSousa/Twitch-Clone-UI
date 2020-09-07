import styled from 'styled-components/native';

import { shade } from 'polished';
export const List = styled.ScrollView`
    padding: 18px 0 22px;
`;

export const StreamContainer = styled.View`
    margin: 14px 0 20px;
    flex-direction: row;
`;
export const Thumbnail = styled.ImageBackground`
    width: 120px;
    height: 70px;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const Status = styled.View`
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 5px 5px;
`;
export const Views = styled.Text`
    color: ${props => props.theme.colors.black};
`;
export const RedCircle = styled.View`
    width: 12px;
    height: 12px;
    margin-top: 4px;
    border-radius: 16px;
    margin-right: 6px;
    background-color: ${props => props.theme.colors.red};
`;

export const StreamColum = styled.View`
    margin: 0px 14px 0px;
`;
export const PerfilRow = styled.View`
    flex-direction: row;
`;
export const Description = styled.Text`
    color: ${props => props.theme.colors.black};
`;
export const Category = styled.Text`
    color: ${props => props.theme.colors.gray};
    margin: 4px 0 4px;
`;
export const Language = styled.Text`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.tag};
    width: 80px;
    text-align: center;
    padding: 2px;
    border-radius: 16px;
    font-size: 12px;
    font-family: Roboto_400Regular;
`;
export const Icon = styled.Image`
    width: 18px;
    height: 18px;
    border-radius: 16px;
    margin-right: 8px;
    background-color: ${props => shade(0.1, props.theme.colors.gray)};
`;
export const Name = styled.Text`
    color: ${props => props.theme.colors.black};
    font-family: Roboto_700Bold;
`;