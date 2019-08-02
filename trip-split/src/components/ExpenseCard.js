import React, {useState, useEffect } from 'react';



export default function ExpenseCard(props) {
    console.log(props.trip)
    const [trip, setTrip] = useState(false)
    useEffect(()=>{
        setTrip(props.trip)
    }, [props.trip])
    
    return(
        trip.trip_id
            ? <div>
                {trip.expense.map((expense)=> {
                    return(
                        <h3>{expense.expense_title}</h3>
                    )   
                })} 
                {trip.expense.map((expense)=>{
                  return(
                    <h1>{expense.memebers.reduce(function(total,member){
                        return total+member.expense_amount_paid
                    },0)}
                    </h1>
                    )
                  
                    
                })}
         
             </div>
            : <></>

        
    )
}


