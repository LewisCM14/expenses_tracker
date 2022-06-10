import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
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
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        // Unique identifier is required for dynamic list rendering, preventing console errors.
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
