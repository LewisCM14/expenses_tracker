import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    /*
    Iterates over each expense in the expenses array passed down from Expenses.js,
    for each expense collects the month value, storing it in the expenseMonth variable.
    the expenseMonth now returns an index value that matches the chartDataPoints object above.
    Each chartDataPoint that corresponds to the expenseMonth is now updated by each expense amount.
    */

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount; 
    };

    return <Chart dataPoints={ chartDataPoints } />;
};

export default ExpensesChart;