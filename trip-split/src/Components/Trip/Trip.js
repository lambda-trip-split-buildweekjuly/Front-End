import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
//STYLE

function Trip(props) {
// console.log("trip-props", props);
const [formToggle, setFormToggle] = useState(false);
console.log("trip-props", props)
function getTripData() {
  const id = props.match.params.id;
  const tripObj = props.location.state;
  console.log(tripObj);
  console.log("id", id);
}
useEffect(() => {
  getTripData()
}, [])
  return (
    
      formToggle ? <ExpenseForm setFormToggle={setFormToggle}/> : 
       
       <div className="trip-container">
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