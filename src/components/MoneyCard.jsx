import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup'

/**
 * Displays various monetary amounts of FIRE
 * @param { Number } amount
 * @param { String } type
 */
const MoneyCard = ({ amount, type }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} data-testid="moneycard-1">
            <CardContent>
                <Typography 
                    className={classes.title}
                    gutterBottom
                >
                    {type}
                </Typography>
                <Typography className={classes.number}>
                    $<CountUp 
                        duration={2}
                        end={amount} 
                    />
                </Typography>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    number: {
        fontSize: 45,
        fontFamily: "'Roboto Mono', monospace",
        textAlign: "center",
        color: "#006400"
    },
    title: {
        fontSize: 30,
        fontFamily: "'Roboto Mono', monospace",
        textAlign: "center"
    },
}));

export default MoneyCard;