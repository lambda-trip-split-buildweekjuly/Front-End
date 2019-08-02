import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';



function ExpenseCard(props) {
    console.log("expense", props.expense)
    const [trip, setTrip] = useState(false)
    useEffect(()=>{
        setTrip(props.trip)
    }, [props.trip, props.getTripTrigger, props.gotTripsTrigger])
    
    return(
        trip.trip_id
            ? <div>
{/*                
                {<h3>{props.trip}</h3>}
                <h1>{props.trip.memebers.reduce(function(total,member){
                    return total+member.expense_amount_paid
                    },0)}
                </h1>
                ) */}
                  
              </div>
            : <></>

        
    )
}

function mapStateToProps(state){
    return {
     getTripsTrigger: state.getTripsTrigger,
     gotTripsTrigger: state.gotTripsTrigger
    }
  }
  
  export default connect(mapStateToProps, {})(ExpenseCard);
// expense total
//   <h1>{expense.memebers.reduce(function(total,member){
//     return total+member.expense_amount_paid
// },0)}
// </h1>
  
