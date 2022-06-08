import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {

    // KEY points at the useState function, sets the initial value (in this instance an empty sting)
    // VALUE is the function to update the initial value later.
    // useState always returns an array with two values which can then be destructured,
    // the first is always the current state value, the second is a function to update it

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={ titleChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={ amountChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2022-06-08' max='2025-06-08' onChange={ dateChangeHandler }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm