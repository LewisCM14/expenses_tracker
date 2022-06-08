import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // title points at the useState function, sets the initial value
  // setTitle is the function to update the value later
  // useState always returns an array with two values,
  // the first is always the current state value, the second is a function to update it
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={ props.date } />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">£{ props.amount }</div>
      </div>
      <button onClick={ clickHandler }>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
