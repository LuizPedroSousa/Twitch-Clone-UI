import styled from 'styled-components/native';


export const List = styled.ScrollView.attrs({
    horizontal: true,
})`
    padding: 8px 0 22px;
`;

export const Container = styled.TouchableOpacity`
    margin-right: 8px;
    max-width: 90px;
`;

export const CategoryImage = styled.Image`
    width: 90px;
    height: 120px;
`;

export const CategoryTitle = styled.Text`
    color: ${props => props.theme.colors.black};
    font-family: Roboto_400Regular;
    font-size: 13px;
    text-transform: capitalize;
    margin-top: 2px;
`;

export const Status = styled.View`
    flex-direction: row;
    margin: 2px 0 0;
    align-items: center;
`;

export const RedCircle = styled.View`
    width: 14px;
    height: 14px;
    border-radius: 16px;
    margin-right: 2px;
    border: 2px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.red};
`;

export const Views = styled.Text`
    color: ${props => props.theme.colors.gray};
    font-family: Roboto_400Regular;
    font-size: 12px;
`;