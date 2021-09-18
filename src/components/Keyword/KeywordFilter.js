import React from 'react';
import classes from './KeywordFilter.module.css';
import Keywords from './Keywords';

const KeywordFilter = (props) => {
	return (
		<div className={classes.filter}>
			<ul className={classes.keyword}>
				{props.keywords.map((keyword) => (
					<Keywords
						key={keyword}
						keyword={keyword}
						onRemove={props.onRemove}
					/>
				))}
			</ul>
			<button
				type="button"
				className={classes.clear}
				onClick={props.onClear}
			>
				Clear
			</button>
		</div>
	);
};

export default KeywordFilter;
