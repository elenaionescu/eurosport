import React from 'react';
import classes from './Player.css';

// Components
import Info from './Info/Info';
import Nationality from './Nationality/Nationality';
import Name from './Name/Name';
import Avatar from './Avatar/Avatar';
import Ranking from './Ranking/Ranking';
import Points from './Points/Points';

const player = (props) => (
    <div className={classes.player}>
        <Ranking position={props.data.rank} />
        <Avatar picture={props.picture} />
        <Name firstname={props.firstname} lastname={props.lastname} />
        <Nationality flag={props.country.picture} countryCode={props.country.code} />
        <Info label="Age" value={props.data.age} />
        <Info label="Weight" value={`${props.data.weight/1000}kg`} />
        <Info label="Height" value={`${props.data.height}cm`} />
        <Points points={props.data.points}/>
    </div>
);

export default player;