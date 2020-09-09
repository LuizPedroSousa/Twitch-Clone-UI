import styled from 'styled-components/native';
import { lighten } from 'polished';
export const List = styled.ScrollView.attrs({
    horizontal: true,
})`
    padding: 14px 0 22px;
`;



export const Especs = styled.Text`
    color: ${props =>
        props.theme.title = 'dark'
            ?
            lighten(0.4, props.theme.colors.primary)
            :
            props.theme.colors.black
    };
`;

export const TagContainer = styled.View`
    justify-content: flex-start;
    max-width: 80px;
    padding: 14px 0 0;
`;