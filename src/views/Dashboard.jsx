import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from '../components/PageWrapper';
import MoneyCard from '../components/MoneyCard';
import LineGraph from '../components/LineGraph';
import OptionButton from '../components/OptionButton';
import DropDownMenu from '../components/DropDownMenu';

import MOCK_DATA from '../assets/mock-data.json';

const Dashboard = () => {

    const classes = useStyles();

    // Will change based on type of FIRE that is selected
    const [values, setValues] = useState({
        net: 10000,
        bills: 1500,
        invest: 1500,
        savings: 7000
    });

    // Datapoints displayed on the graph
    const [data, setData] = useState(MOCK_DATA.net);

    return (
        <PageWrapper>
            <Grid
                item
                xs={12}
                md={6}
                lg={3}
            >
                <MoneyCard 
                    amount={values.net}
                    type="Net Monthly Earnings"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                lg={3}
            >
                <MoneyCard 
                    amount={values.savings}
                    type="Monthly Savings"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                lg={3}
            >
                <MoneyCard 
                    amount={values.bills}
                    type="Monthly Bills"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                lg={3}
            >
                <MoneyCard 
                    amount={values.invest}
                    type="Monthly Investments"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={9}
            >
                <LineGraph 
                    data={data}
                    title="Net Monthly Earnings"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={3}
            >
                <DropDownMenu />
                <OptionButton
                    field="net"
                    setData={setData}
                    title="Net Earnings"
                />
                <OptionButton
                    field="savings"
                    setData={setData}
                    title="Savings"
                />
                <OptionButton
                    field="bills"
                    setData={setData}
                    title="Bills"
                />
                <OptionButton
                    field="investments"
                    setData={setData}
                    title="Investments"
                />
            </Grid>
        </PageWrapper>
    );
}

const useStyles = makeStyles(theme => ({
    text: {
        fontFamily: "'Roboto Mono', monospace",
        fontSize: 20
    }
}));

export default Dashboard;