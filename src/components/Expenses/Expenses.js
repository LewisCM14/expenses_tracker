import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    // Sets the date dropdown with the filteredYear key, initialized as the 2020 string
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        // when the onChange event is triggered on the date dropdown selector,
        // Triggers the onChangeFilter function from ExpenseFilter.js,
        // updating the selectedYear value with the setFilteredYear 'useState' function.
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        // Stores the expense items in the filteredExpenses object that match the selected year
        // Then passes them to the ExpenseItem component to be mapped in the browser.
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={ filteredExpenses } />
            </Card>
        </div>
    );
};

export default Expenses;
