import React from 'react';
import classes from './Avatar.css';

const avatar = (props) => (
    <div className={classes.avatar}>
        <img src={props.picture} alt={props.altText} />
    </div>
);

export default avatar;