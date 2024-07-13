import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

function Search({ categories }) {
  const flattenCategories = (categories) => {
    let flatList = [];
    categories.forEach((category) => {
      flatList.push(category.name);
      if (category.subcategories) {
        flatList = flatList.concat(flattenCategories(category.subcategories));
      }
    });
    return flatList;
  };

  const options = flattenCategories(categories);

  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(params) => <TextField {...params} label="Search" variant="outlined" size='small' style={{ width: 200 }}/>}
    />
  );
}

export default Search;
