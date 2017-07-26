import React from 'react';

const ListItem = ( { item } ) => {
	return (
		<li key = {item.id}>
			{item.name}
		</li>
	)
};

export default ListItem;