import React, { useState } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar 
                className={classes.nav}
                position="static"
            >
                <Toolbar>
                    <div className={classes.flex}>
                    <h1>Financial Independence, Retire <span className={classes.textBottom}>Early.</span></h1>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles(theme =>({
    nav: {
        backgroundColor: '#A9A9A9'
    },
    flex: {
        flexGrow: 1,
    },
    root: {
        position:"fixed",
        bottom:0,
        left:0,
        width:"100%",
    },
    textBottom: {
        color:'#7fffd4'
    }
}));

export default Footer;