import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

/**
 * Visualize trends over the past months of the year
 * @param { Number[] } data
 * @param { String } title
 */
const LineGraph = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Line 
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: 'Amount in Dollars',
                        data: props.data,
                        fill: false,
                        backgroundColor: "#006400",
                        borderColor: "rgba(0, 100, 0, 0.5)",
                    }]
                }}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                              beginAtZero: true,
                            },
                        }]
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: `${props.title} Trends` 
                        }
                    }
                }}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    }
}));

export default LineGraph;