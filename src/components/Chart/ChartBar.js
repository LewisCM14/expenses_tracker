import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {

    /*
    Sets the barFillHeight variable to 0% initially, before calculating the desired percentage
    by diving the value given by the maxValue (100%) and rounding the to nearest integer,
    result is converted to a string. The new barFillHeight value is used to set the CSS class.
    Being returned as an object dynamically in the style attribute on the 'bar__fill' div.
    */

    let barFillHeight = '0%';

    if (props.max > 0) {
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