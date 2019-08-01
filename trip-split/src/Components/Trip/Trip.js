import React, { useEffect } from 'react';
//STYLE

function Trip(props) {
// console.log("trip-props", props);

function getTripData() {
  const id = props.match.params.id;
  console.log("id", id);
}
useEffect(() => {
  getTripData()
}, [])
  return (
    <div className="trip-container">
        <h1>Trip</h1>
      <div className="expense-section">
        <button><h2>+</h2></button>
        <h1>New Expense</h1>
      </div>

      <div className="calculate-section">
        <button>Calculate Total</button>
      </div>
    
    </div>
  )
}

export default Trip;