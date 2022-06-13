import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
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
					maxValue={ null }
					label={ dataPoint.label }
				/>
			))}
      	</div>
    );
};

export default Chart;