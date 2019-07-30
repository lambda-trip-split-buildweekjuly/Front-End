import React from 'react';
//STYLE

function Trip() {

  return (
    <div className="trip-container">
      
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