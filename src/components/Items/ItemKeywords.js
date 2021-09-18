import React from 'react';
import classes from './ItemKeywords.module.css';

const ItemKeywords = (props) => {
	const getKeywordHandler = (keyword) => {
		props.onAdd(keyword);
	};

	return (
		<div className={classes.key}>
			{props.keywords.map((keyword) => (
				<button
					type="button"
					key={keyword}
					className={classes['key-item']}
					onClick={() => getKeywordHandler(keyword)}
				>
					{keyword}
				</button>
			))}
		</div>
	);
};

export default ItemKeywords;
