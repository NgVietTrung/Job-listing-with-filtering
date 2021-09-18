import React from 'react';
import classes from './ItemInfo.module.css';

const ItemInfo = (props) => {
	return (
		<div className={classes.info}>
			<div className={classes['info-img']}>
				<img src={props.data.logo} alt="" />
			</div>
			<div className={classes.detail}>
				<div className={classes.des}>
					<div className={classes.company}>{props.data.company}</div>
					{props.data.new && <div className={classes.new}>NEW!</div>}
					{props.data.featured && (
						<div className={classes.featured}>FEATURED</div>
					)}
				</div>

				<div className={classes.position} onClick={props.onBorder}>
					{props.data.position}
				</div>

				<div className={classes.des}>
					<div className={classes.contact}>{props.data.postedAt}</div>
					<div className={classes.contact}>{props.data.contract} </div>
					<div className={classes.contact}>{props.data.location} </div>
				</div>
			</div>
		</div>
	);
};

export default ItemInfo;
