import React from 'react';
import PeopleForm from './PeopleForm';
import {Link} from 'react-router-dom';
import Trip from './Trip/Trip'
import Card from './Trip/Card';
import '../styles/TripsDashboard.css';

//for Redux #####################################################################
import {connect} from 'react-redux'
//###############################################################################

function TripsDashboard(props) {
  // console.log("dash trips: ", props)
    return (
      // <Route>
        <div className="dashboard">
        <h1>TripsDashboard</h1>
          <nav>

              <Link className = "btn" to="/people-form">New Trip</Link>
            {props.closedTrips.map((trip)=> {
              return( <Card trip={trip} key={Math.random()}/>)
            })}
            {props.openTrips.map((trip)=> {
              return(<Card trip={trip} key={Math.random()}/>)
            })}
          </nav>
        </div>
      // </Route>
    );
  } 


//for Redux #######################################################################
function mapStateToProps(state){
  // console.log("redux in dash: ", state)
  return {
    openTrips: state.openTrips,
    closedTrips: state.closedTrips
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








    