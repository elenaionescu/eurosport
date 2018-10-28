import React from 'react';
import classes from './Points.css';

const points = (props) => (
    <div className={classes.points}>
        <h3>Points:</h3>
        <h2>{props.points}</h2>
    </div>
);

export default points;