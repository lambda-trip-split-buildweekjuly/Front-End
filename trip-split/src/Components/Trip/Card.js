import React from 'react';




export default function Card (props) {
    console.log(props.trip)
    return(
        <div>
            <h1>Card js</h1>
            <p>{props.trip.trip_name}</p>

          {props.trip.expenses.map((expense)=> {
            return(expense.expense_members.map((member)=>{
                  return(<h1>{member.person_name}</h1>)
              }))
          })}

        </div>
    )
}