import React, { useState } from 'react';
import classes from './Item.module.css';
import Card from '../UI/Card';
import ItemInfo from './ItemInfo';
import ItemKeyword from './ItemKeywords';

const Item = (props) => {
	const [itemBorder, setItemBorder] = useState(false);

	const emptyArr = [];
	const role = props.data.role;
	const level = props.data.level;
	const languages = [...props.data.languages];
	const tools = [...props.data.tools];

	emptyArr.push(role, level);
	const keywords = emptyArr.concat(languages, tools);

	const borderHandler = () => {
		setItemBorder(!itemBorder);
	};

	return (
		<Card
			className={`${classes.item} + ${
				itemBorder ? classes['item-active'] : ''
			}`}
		>
			<ItemInfo data={props.data} onBorder={borderHandler} />
			<ItemKeyword id={props.id} keywords={keywords} onAdd={props.onAdd} />
		</Card>
	);
};

export default Item;
