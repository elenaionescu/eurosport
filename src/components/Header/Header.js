import React from 'react';
import classes from './Header.css';
import logo from '../../Eurosport_logo.svg';

const header = () => (
    <header className={classes.header}>
        <img src={logo} alt="logo" />
        <span>Eurosport Player Stats</span>
    </header>
);

export default header;