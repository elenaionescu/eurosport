import React from 'react';
import classes from './Ranking.css';

const ranking = (props) => (
    <div className={classes.ranking}>
        <h1>#{props.position}</h1>
    </div>
);

export default ranking;