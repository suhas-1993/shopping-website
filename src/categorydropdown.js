import React from 'react';
import { List } from '@mui/material';
import CategoryItem from './categoryitems'; // Adjust path as per your project structure

function CategoryList({ categories }) {
  return (
    <List>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </List>
  );
}

export default CategoryList;
