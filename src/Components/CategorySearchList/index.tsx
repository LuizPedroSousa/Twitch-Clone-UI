import React, { useContext } from 'react';
import { Tag } from '../StreamSeachList/styles';
import {
  List,
  Especs,
  TagContainer
} from './styles';
import CategoryItem from '../CategoryItem';
import categoriesSearch from '../../Utils/categoriesSearch';
import { ThemeContext } from 'styled-components';

const CategorySearchList: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <List>
      {categoriesSearch.map(item => {
        return (
          <CategoryItem
            key={item.name}
            item={item}
          >
            <Especs
              numberOfLines={1}
            >
              {item.views} espectadores
              </Especs>
            <TagContainer>
              <Tag
                style={
                  item.tag == undefined
                  &&
                  { backgroundColor: colors.primary }
                }
              >{item.tag}
              </Tag>
            </TagContainer>
          </CategoryItem>
        );
      })}
    </List>
  );
};

export default CategorySearchList;
