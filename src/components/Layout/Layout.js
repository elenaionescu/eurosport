import React from 'react';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Style
import classes from './Layout.css';

const layout = (props) => (
    <div className={classes.layout}>
        <Header />
        <main className={classes.layout__main}> { props.children }</main>
        <Footer />
    </div>
);

export default layout;