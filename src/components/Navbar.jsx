import React, { useState } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    AccountBalanceWalletSharp as BankIcon, 
    TransferWithinAStationRounded as TransferIcon,
    AttachMoney as MoneyIcon,
    Payment as PaymentIcon,
    Assignment as NoteIcon,
    ImportContacts as ManagementIcon,

} from '@material-ui/icons/';

import capco from '../assets/capco-logo.png';

const Navbar = () => {
    const classes = useStyles();
    const [openPanel, setOpenPanel] = useState(false);

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
                    <Tabs id="tabs" className={classes.tabs} aria-label="simple tabs example">
                        <Tab label="My Accounts" icon={<BankIcon/>}/>
                        <Tab label="Transfer" icon={<TransferIcon/>}/>
                        <Tab label="Pay Bills" icon={<MoneyIcon/>}/>
                        <Tab label="Deposits" icon={<PaymentIcon/>}/>
                        <Tab label="Statements" icon={<NoteIcon/>}/>
                        <Tab label="Money Management" icon={<ManagementIcon/>}/>
                    </Tabs>
                    <div className={classes.flex} />
                    <IconButton>
                        <Menu onClick={()=> setOpenPanel(true)}/>
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
    tabs:{
        color:"#000000",
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