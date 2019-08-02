import React from 'react';
import { Link } from 'react-router-dom';
import {CurrentTripCard, PastTripCard} from './TripCard';
import '../styles/TripsDashboard.scss';
import {Button} from './Buttons.js';

//for Redux #####################################################################
import {connect} from 'react-redux'
//###############################################################################

function TripsDashboard(props) {
  console.log("dash trips: ", props)
    return (
        <div className="dashboard">
          <h1>My Trips</h1>

          <Link to="/people-form"><Button>New Trip</Button></Link>

          <h2>Current Trips</h2>

          {props.openTrips.map((trip)=> {
            return (
              <Link key = {Math.random()} to={{pathname:`/trip/${trip.trip_id}`, state:{trip:trip}}}> 
              <CurrentTripCard trip = {trip}/>
            </Link>
            )
          })}

          <h2>Past Trips</h2>

          {props.closedTrips.map((trip)=> {
            return ( 
              <Link key = {Math.random()} to={{pathname:`/trip/${trip.trip_id}`, state:{trip:trip}}}> 
                <PastTripCard trip = {trip}/> 
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
//4--> to use "whatYouWannaCallIt" use "props.whatYouWannaCallIt"
