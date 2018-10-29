import React from 'react';
import calculateScore from '../../../utils/calculateScore';
import classes from './winlosses.css';

const WinsLosses = ({ score }) => {
  const arr = calculateScore(score);
  return (
    <div>
      <div className={classes.winlosses}>
        <h3>Wins:</h3>
        <span> {arr[0]}</span>
      </div>
      <div className={classes.winlosses}>
        <h3>Losses:</h3>
        <span>{arr[1]}</span>
      </div>
    </div>

  );
};

export default WinsLosses;