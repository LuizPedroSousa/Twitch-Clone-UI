import styled from 'styled-components/native';
import { lighten } from 'polished';
export const Container = styled.View`
    padding: 0 0 14px;
`;

export const TitleText = styled.Text`
    font-family: Roboto_400Regular;
    text-transform: uppercase;
    color: ${props =>
        props.theme.title = 'dark'
            ?
            lighten(0.5, props.theme.colors.primary)
            :
            props.theme.colors.black
            };
    background-color: ${props => props.theme.colors.primary};    
`;