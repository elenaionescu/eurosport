import React from 'react';
import calculateScore from '../../../utils/calculateScore';
import classes from './winlosses.css';

const WinsLosses = ({ score }) => {
  const arr = calculateScore(score);
  return (
    <div>
      <div className={classes.winlosses}>
        <h3>Wins: {arr[0]}</h3>
      </div>
      <div className={classes.winlosses}>
        <h3>Losses:  {arr[1]}</h3>
      </div>
    </div>

  );
};

export default WinsLosses;