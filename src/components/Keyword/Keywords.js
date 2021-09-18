import React from 'react';
import classes from './Keywords.module.css';

const Keywords = (props) => {
	const selectKeywordHandler = () => {
		props.onRemove(props.keyword);
	};
	return (
		<li className={classes.key}>
			<div className={classes['key-name']}>{props.keyword}</div>
			<button
				type="button"
				className={classes['key-btn']}
				onClick={selectKeywordHandler}
			>
				X
			</button>
		</li>
	);
};

export default Keywords;
