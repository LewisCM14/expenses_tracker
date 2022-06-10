import React from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
    // On ExpenseForm.js submit, receives the expenseData object as a parameter, saved in the onSaveExpenseData prop
    // The saveExpenseDataHandler function then uses this prop to pull out all the KEY: VALUE pairs
    // Copying the array into the expenseData object and adding an ID key & Value.
    // Then calls the the onAddExpense data prop in Apps.js, passing it the enriched expenseData array.

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
        </div>
    );
};

export default NewExpense;