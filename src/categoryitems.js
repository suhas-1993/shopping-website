import React, { useState } from 'react';
import { ListItem, ListItemText, Collapse, List } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function CategoryItem({ category }) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ListItem button>
        <ListItemText primary={category.name} />
        {category.subcategories ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItem>
      {category.subcategories && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {category.subcategories.map((subcategory, index) => (
              <CategoryItem key={index} category={subcategory} />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
}

export default CategoryItem;
