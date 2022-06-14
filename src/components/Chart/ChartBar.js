import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {

    /*
    Sets the barFillHeight variable to 0% initially, before calculating the desired percentage
    by dividing the value given by the maxValue attribute (100%) passed from Chart.js, rounding the to nearest integer,
    the result is then converted to a string. The new barFillHeight value is used to set the CSS class.
    Being returned as an object dynamically in the style attribute on the 'bar__fill' div.
    */

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={ {height: barFillHeight } }></div>
            </div>
            <div className='chart-bar__label'>{ props.label }</div>
        </div>
    );
};

export default ChartBar