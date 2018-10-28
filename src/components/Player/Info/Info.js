import React from 'react';
import classes from './Info.css';

const info = (props) => (
    <div className={classes.info}>
        <h3>{props.label}:</h3>
        <span>{props.value}</span>
    </div>
);

export default info;