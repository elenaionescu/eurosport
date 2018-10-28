import React from 'react';
import classes from './List.css';

const list = (props) => (
    <div className={classes.list}>
        { props.children }
    </div>
);

export default list;