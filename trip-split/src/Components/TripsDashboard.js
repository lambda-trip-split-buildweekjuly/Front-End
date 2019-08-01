import React from 'react';
import PeopleForm from './PeopleForm';
import { Link } from 'react-router-dom';
import Trip from './Trip/Trip'
import Card from './Trip/Card';
import '../styles/TripsDashboard.css';

//for Redux #####################################################################
import {connect} from 'react-redux'
//###############################################################################

function TripsDashboard(props) {
  console.log("dash trips: ", props)
    return (
        <div className="dashboard">
        <h1>TripsDashboard</h1>
         
            
              <Link className = "btn" to="/people-form">New Trip</Link>
              <h1>CLOSED</h1>
            {props.closedTrips.map((trip)=> {
              return ( 
              <Link to={{
                pathname:`/trip/${trip.trip_id}`,
                state:{
                  trip:trip
                }
              }}> 
                <Card trip={trip} key={Math.random()}/> 
              </Link>
              )
            })}

            <h1>OPEN</h1>
            {props.openTrips.map((trip)=> {
              return (
              <Link to={{
                pathname:`/trip/${trip.trip_id}`,
                state:{
                  trip:trip
                }
              }}> 
                <Card trip={trip} key={Math.random()}/>
              </Link>
              )

            })}
          
        </div>
    );
  } 


//for Redux #######################################################################
function mapStateToProps(state){
  return {
    trips: state.trips,
    closedTrips: state.closedTrips,
    openTrips: state.openTrips
  }
}

export default connect(mapStateToProps, {})(TripsDashboard);
//###############################################################################

//1 --> import { connect }
//2--> export default connect(mapStateToProps, {})(ComponentNameHere);
//3--> function mapStateToProps(state){
//       console.log("redux in dash: ", state)
//       return {
//         whatYouWannaCallIt: state.whatItsCalledInReducer.js > defaultState{}
//       }
//     }








    