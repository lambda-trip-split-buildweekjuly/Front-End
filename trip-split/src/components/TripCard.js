import React from 'react';
import {Card} from 'semantic-ui-react';
// import styled from 'styled-components';
// //STYLE
// const CardDiv = styled.div`border: 1px solid green;`;




// export default function Card (props) {
//     console.log(props.trip)
//     return(
//         <CardDiv>
//             <h1>{props.trip.trip_name}</h1>
//             <p>Card js</p>

//           {/* {props.trip.expenses.map((expense)=> {
//             return(expense.expense_members.map((member)=>{
//                   return(<h6>{member.person_name}</h6>)
//               }))
//           })} */}

//         </CardDiv>
//     ) 
    
// }

export default function TripCard(props){
    
    const totalExpense = trip => {
        let total = 0;
        trip.trip.expenses.forEach(expense => {
            total = total + expense.expense_amount;
        });
        return total;
    }

    return(
        <Card fluid>
            <Card.Content>
                <Card.Header content={props.trip.trip_name} />
                <Card.Description content={`Total Expenses: ${totalExpense(props)}`}/>
            </Card.Content>
        </Card>
    )
}