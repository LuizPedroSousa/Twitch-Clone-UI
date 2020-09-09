import React, { useContext } from 'react';
import data from '../../Utils/categoriesFollowing';
import {
  List,
  Status,
  RedCircle,
  Views,
} from './styles';
import context from './../../styles/Utils/themeContext';
import CategoryItem from '../CategoryItem';
const CategoryList: React.FC = () => {
  return (
    <List
      showsHorizontalScrollIndicator={false}
    >
      {data.map(item => {
        return (
          <CategoryItem
            key={item.name}
            item={item}
          >
            <Status key={item.name}>
              <RedCircle />
              <Views >
                {item.views}
              </Views>
            </Status>
          </CategoryItem>
        );
      })}
    </List>
  );
};

export default CategoryList;
