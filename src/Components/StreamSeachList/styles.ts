import styled from 'styled-components/native';
import { lighten } from 'polished';
export const Container = styled.View`
    padding: 0 14px 0;
    align-items: center;
`;

export const StreamItemContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin: 0 0 14px;
`;

export const StreamBackground = styled.ImageBackground`
    flex: 1;
    width: 250px;
    height: 150px;
    justify-content: space-between;
    padding: 14px 4px 14px;
`;
export const Status = styled.Text`
    background-color:${props => props.theme.colors.red};
    width: 58px;
    height: 18px;
    color: ${props => props.theme.colors.black};
    text-transform: uppercase;
    text-align: center;
    border-radius: 6px;
    font-size: 12px;
    font-family: Roboto_400Regular;
`;

export const Espectadores = styled.Text`
    border-radius: 8px;
    color: ${props => props.theme.colors.black};
    font-family: Roboto_400Regular;
    width: 130px;
    text-align:center;
    background-color: ${props => props.theme.colors.tag};
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 24px 0 8px;
`;
export const Channel = styled.Text`
    color: ${props => props.theme.colors.black};
    margin: 0 4px 0;
`;
export const Info = styled.Text`
    color: ${props => lighten(0.5, props.theme.colors.primary)};
`;

export const LanguageContainer = styled(InfoContainer)`
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0 0 24px;
`;
export const Tag = styled.Text`
    margin: 0 2px;
    border-radius: 8px;
    text-align: center;
    font-family: Roboto_400Regular;
    padding: 2px;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.tag};
`;