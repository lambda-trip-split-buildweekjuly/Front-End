import React from 'react';
import PeopleForm from './PeopleForm';
import {Link} from 'react-router-dom';
import Trip from './Trip/Trip'
import '../styles/TripsDashboard.css';

//for Redux #####################################################################
import {connect} from 'react-redux'
//###############################################################################

function TripsDashboard(props) {
  console.log("dash props: ", props)
    return (
      // <Route>
        <div className="dashboard">
        <h1>TripsDashboard</h1>
          <nav>
              <Link className = "btn" to="/people-form">New Trip</Link>
          </nav>
         
          
        </div>
      // </Route>
    );
  } 


//for Redux #######################################################################
function mapStateToProps(state){
  console.log("redux in dash: ", state)
  return {
    trips: state.trips
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








    