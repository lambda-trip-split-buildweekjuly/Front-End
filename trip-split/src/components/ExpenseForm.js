import React, { useState } from 'react';
import { connect } from 'react-redux';

function ExpenseForm(props) {

  const [amountsPaid, setAmountsPaid] = useState({
    expenseName: "",
    amount_paid1: "",
    amount_paid2: "",
    amount_paid3: "",
    amount_paid4: "",
    amount_paid5: ""
  })

  function onChange(event) {
    setAmountsPaid({ ...amountsPaid, [event.target.name]: event.target.value });
    console.log(amountsPaid);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(amountsPaid);
    setAmountsPaid({
    expenseName: "",
    amount_paid1: "",
    amount_paid2: "",
    amount_paid3: "",
    amount_paid4: "",
    amount_paid5: ""
  });
  }

  return (
    <div className="amountsPaid-container">
     
      <h1>Expense Form</h1>
        <form onSubmit={onSubmit}>
          <div>
            <input value={amountsPaid.expenseName} name="expenseName" onChange={onChange} type="text" />
            <input value={amountsPaid.amount_paid1} name="amount_paid1" onChange={onChange} type="number" />
            <input value={amountsPaid.amount_paid2} name="amount_paid2" onChange={onChange} type="number" />
            <input value={amountsPaid.amount_paid3} name="amount_paid3" onChange={onChange} type="number" />
            <input value={amountsPaid.amount_paid4} name="amount_paid4" onChange={onChange} type="number" />
            <input value={amountsPaid.amount_paid5} name="amount_paid5" onChange={onChange} type="number" />
          </div>
            <button onClick={() => props.setFormToggle(false)} type="submit">Save Expense</button>
        </form>
    </div>
  )
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {})(ExpenseForm);
