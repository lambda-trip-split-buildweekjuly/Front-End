import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';

import {Button} from './Buttons.js';

import { connect } from 'react-redux';
import { getTripsByUserId } from '../actions/actions';

import ExpenseCard from './ExpenseCard';


//STYLE

function Trip(props) {
  const [formToggle, setFormToggle] = useState(false);
  console.log("trip-props", props)
  const [trip, setTrip] = useState({
    expense: [],
    trip_id: false
  })

  useEffect(() => {
    function getTripData() {
      const id = props.match.params.id;
      const tripObj = props.location.state.trip;
      // console.log("id", id);
      setTrip(tripObj);
      
    }
    getTripData()}, [props.match.params.id, props.location.state])

  useEffect(() => {
    console.log("Getting user trips")
    const user_id = localStorage.getItem('user_id')
    props.getTripsByUserId(user_id)
  }, [props.getTripsTrigger])


  return (
      formToggle 
        ? <ExpenseForm setFormToggle={setFormToggle} trip={trip}/> 
        :<div className="trip-container">
          <h1>{trip.trip_name}</h1>
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
          {trip.expense.map(expense => {
            return(
              <ExpenseCard trip = {trip}/>
            )
          })}
        </div>
  )
 
}


export default Trip;

function mapStateToProps(state){
  return {
    getTripsTrigger: state.getTripsTrigger
  }
}

export default connect(mapStateToProps, {getTripsByUserId})(Trip);

