import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {


    // KEY points at the useState function, sets the initial value (in this instance an empty sting)
    // VALUE is the function to update the initial value later.
    // useState always returns an array with two values which can then be destructured,
    // the first is always the current state value, the second is a function to update it

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // ONE STATE SLICE approach, requires all KEY: VALUE pairs to be set within it
    // userInput & setUserInput are the initial value and update function

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // To call the setUserInput function you need to point at it with another function,
        // Collecting the previous state initially, then returning the new state.
        // This is done because React schedules updates and you don't want to rely on an outdated state
        // Uses the spread operator to collect the other values in the prevState method so they are not lost.
        // Copies in the new KEY: VALUE (title in this case) pair into the new object.
        
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value,
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value,
        //     };
        // });
    };

    const submitHandler = (event) => {
        // Prevent the browser submitting the form on submit, page wont reload
        event.preventDefault();

        // Stores the input data together, using the Date method to parse the string value
        const expenseData = {
           title: enteredTitle,
           amount: enteredAmount,
           date: new Date(enteredDate),
        };

        // Executes the saveExpenseDataHandler in NewExpense.js via props, passing it the expenseData object as an arg.
        // Uses the two-way binding on the form to set the input values back to empty strings
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={ enteredTitle } 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={ enteredAmount }
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={ enteredDate }
                        min="2022-06-08"
                        max="2025-06-08"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={ props.onCancel }>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        // takes in the stopEditingHandler function from NewExpense.js via the onCancel prop
    );
};

export default ExpenseForm;
