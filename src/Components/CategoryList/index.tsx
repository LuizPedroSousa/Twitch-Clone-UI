import React, { useContext } from 'react';
import data from '../../Utils/categories';
import { List } from './styles';
import context from './../../styles/Utils/themeContext';
import {
  Container,
  CategoryImage,
  CategoryTitle,
  Status,
  RedCircle,
  Views,
} from './styles';


interface ItemProps {
  item: typeof data[0];
}
const CategoryList: React.FC = () => {
  const { theme } = useContext(context);
  const CategoryItem: React.FC<ItemProps> = ({ item }) => {
    return (
      <Container>
        <CategoryImage resizeMode='contain' source={item.source} />
        <CategoryTitle
          numberOfLines={1}
        >
          {item.name}
        </CategoryTitle>
        <Status>
          <RedCircle />
          <Views >
            {item.views}
          </Views>
        </Status>
      </Container>
    );
  };
  return (
    <List
      showsHorizontalScrollIndicator={false}
    >
      {data.map(item => {
        return (
          <CategoryItem
            key={item.name}
            item={item}
          />
        );
      })}
    </List>
  );
};

export default CategoryList;
