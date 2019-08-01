import React from 'react';
import styled from 'styled-components';
//STYLE
const CardDiv = styled.div`border: 1px solid green;`;




export default function Card (props) {
    // console.log("card-props", props)
    // function goToTrip() {
    //     props.history.push({
    //         pathname: "/trip",
    //         search: "?the=query",
    //         state: {trip:props.trip}
    //     })
    // }
    console.log(props.trip)
    return(
        <CardDiv>
            
            <h1>{props.trip.trip_name}</h1>
            <p>Card js</p>

          {/* {props.trip.expenses.map((expense)=> {
            return(expense.expense_members.map((member)=>{
                  return(<h6>{member.person_name}</h6>)
              }))
          })} */}

        </CardDiv>
    ) 
    
}