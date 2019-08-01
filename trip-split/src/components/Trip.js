import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import {Button} from './Buttons.js';
//STYLE

function Trip(props) {
  const [formToggle, setFormToggle] = useState(false);
  console.log("trip-props", props)

  useEffect(() => {
    function getTripData() {
      const id = props.match.params.id;
      const tripObj = props.location.state;
      console.log("id", id);
    }
    getTripData()}, [props.match.params.id, props.location.state])

  return (
      formToggle 
        ? <ExpenseForm setFormToggle={setFormToggle}/> 
        :<div className="trip-container">
          <h1>Trip</h1>
          <div className="expense-section">
            <Button onClick={() => setFormToggle(true)}><h2>New Expense</h2></Button>
          </div>

          <div className="item-section">
            <h6>NAME OF EXPENSE</h6>
            <h6>TOTAL PRICE OF EXPENSE</h6>
          </div>
          
          <div className="calculate-section">
            <Button>Calculate Total Expenses</Button>
          </div>
        </div>
  )
}

export default Trip;
