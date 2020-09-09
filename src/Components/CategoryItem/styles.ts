import styled from 'styled-components/native';
import {shade} from 'polished';
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