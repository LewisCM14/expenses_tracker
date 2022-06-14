import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	
	// maps each dataPoint passed from ExpensesChart object and stores the integer value in an array
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	
	/*
	Uses the spread operator on the above array to pull out the individual values
	and pass them to the math.max method in the required comma separated arguments.
	This now calculated total maximum is passed to the maxValue attribute on the ChartBar element
	*/
	const totalMaximum = Math.max(...dataPointValues);

    /*
    Creates and instance of the ChartBar for each month that has an expense
	Ensures each bar has a label and that label is the unique ID
    */
    return (
    	<div className="chart">
    		{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={ dataPoint.label }
					value={ dataPoint.value }
					maxValue={ totalMaximum }
					label={ dataPoint.label }
				/>
			))}
      	</div>
    );
};

export default Chart;