import React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import capco from '../assets/capco-logo.png';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar 
                className={classes.nav}
                position="static"
            >
                <Toolbar>
                    <img 
                        className={classes.img}
                        alt="capco"
                        src={capco}
                    />
                    <div className={classes.flex} />
                    <IconButton>
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles(theme =>({
    img: {
        height: '60px',
        marginRight: "15px",
    },
    nav: {
        backgroundColor: '#d3d3d3'
    },
    flex: {
        flexGrow: 1,
    },
    root: {
        marginBottom: '50px'
    }
}));

export default Navbar;