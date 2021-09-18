import React from 'react';
import Item from './Item';

const Items = (props) => {
	return (
		<>
			{props.data.map((data) => (
				<Item data={data} key={data.id} onAdd={props.onAdd} />
			))}
		</>
	);
};

export default Items;
