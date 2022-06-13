import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

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
        // sets the isEditing state back to false on form submission
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        /*
        The ifEditing state is set to false initially, once the on click event for the button is triggered
        The startEditingHandler function sets the state to true,  displaying the ExpenseForm.
        The onCancel pointer passes the stopEditingHandler function down to ExpenseForm.js, 
        setting the isEditing state back to false.
        */
        <div className="new-expense">
            {!isEditing && (
                <button onClick={ startEditingHandler }>Add New Expense</button>
            )}
            {isEditing && ( 
                <ExpenseForm 
                onSaveExpenseData={ saveExpenseDataHandler }
                onCancel={ stopEditingHandler }/>
            )}
        </div>
    );
};

export default NewExpense;