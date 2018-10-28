import React from 'react';
import classes from './Nationality.css';

const nationality = (props) => (
    <div className={classes.nationality}>
        <h3>Nationality: </h3>
        <img src={props.flag} alt={props.countryCode}/>
    </div>
);

export default nationality;