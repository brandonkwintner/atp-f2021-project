import React from 'react';
import { Grid } from '@material-ui/core';

/**
 * Ensures side margin is consistent throughout application.
 */
const PageWrapper = (props) => {
    return (
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                item
                xs={11}
                md={8}
            >
                <Grid
                    container
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PageWrapper;