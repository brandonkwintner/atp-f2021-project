import React from 'react';
import { 
    Button,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MOCK_DATA from '../assets/mock-data.json';

/**
 * Changes data displayed on chart
 * @param { String } field
 * @param { () => void } setData
 * @param { String } title
 */
const OptionButton = ({ field, setData, title }) => {
    const classes = useStyles();

    return (
        <Button 
            className={classes.optionButton}
            variant="outlined"
            onClick={() => setData(MOCK_DATA[field])}
        >
            <Typography className={classes.buttonText}>
                {title}
            </Typography>
        </Button>
    );
}

const useStyles = makeStyles(theme => ({
    optionButton: {
        margin: "10px 0",
        width: '100%',
        backgroundColor: "#006400",
        '&:hover': {
            backgroundColor: "rgba(0, 100, 0, 0.5)",
        }
    },
    buttonText: {
        color: 'white',
        fontFamily: "'Roboto Mono', monospace"
    },
}));

export default OptionButton;