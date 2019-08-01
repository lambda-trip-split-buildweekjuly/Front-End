import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
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
            <button onClick={() => setFormToggle(true)}><h2>+</h2></button>
            <h1>New Expense</h1>
          </div>
          <div className="calculate-section">
            <button>Calculate Total</button>
          </div>
        </div>
  )
}

export default Trip;