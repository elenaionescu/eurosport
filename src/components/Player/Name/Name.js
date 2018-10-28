import React from 'react';
import classes from './Name.css';

const name = (props) => (
    <div className={classes.name}>
        <h1>{props.firstname} {props.lastname}</h1>
    </div>
);

export default name;