import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Changes FIRE strategy
 */
const DropDownMenu = () => {
    const classes = useStyles();
    const [strategy, setStrategy] = useState("Lean")

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">F.I.R.E Strategy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <MenuItem value={"Lean"}>Lean</MenuItem>
          <MenuItem value={"Fat"}>Fat</MenuItem>
          <MenuItem value={"Barista"}>Barista</MenuItem>
        </Select>
      </FormControl>
    );
}

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%'
    }
}));

export default DropDownMenu;