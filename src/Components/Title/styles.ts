import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 0 14px;
`;

export const TitleText = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.primary};    
`;