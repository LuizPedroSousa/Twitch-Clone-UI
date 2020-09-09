import React from 'react';
import { Text } from 'react-native';
import data from '../../Utils/categoriesFollowing';
import {
  Container,
  CategoryImage,
  CategoryTitle,
} from './styles';
import categoriesSearch from '../../Utils/categoriesSearch';


interface ItemProps {
  item: typeof data[0];
}

const CategoryItem: React.FC<ItemProps> = ({ item, children }) => {
  return (
    <Container>
      <CategoryImage resizeMode='contain' source={{uri: `${item.source}`}} />
      <CategoryTitle
        numberOfLines={1}
      >
        {item.name}
      </CategoryTitle>
      {children}
    </Container>
  );
};
export default CategoryItem;
