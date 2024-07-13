import React from 'react';
import { Container, Typography } from '@mui/material';
import CategoryList from './categorydropdown';
import Search from './search';
import categoriesData from './categories.json';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Website
      </Typography>
      <Search categories={categoriesData.categories} />
      <CategoryList categories={categoriesData.categories} />
    </Container>
  );
}

export default App;
