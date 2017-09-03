import React from 'react';
import ListItem from './ListItem';

const List = ( props ) => {
  const listItems = props.items.map(( item ) => {
    return (
      <ListItem
        key = {item.id}
        item = {item}
        deleteIngredient = {props.deleteIngredient}
      />
    )
  });

  return (
    <ul>
      {listItems}
    </ul>
  )
};

export default List;