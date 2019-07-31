import React from 'react';
import PeopleForm from './PeopleForm';
import {Link} from 'react-router-dom';
import Trip from './Trip/Trip'

function TripsDashboard() {
    return (
      // <Route>
        <div className="dashboard">
        <h1>TripsDashboard</h1>
          <nav>
              <Link to="/people-form">New Trip</Link>
             
          </nav>
        </div>
      // </Route>
    );
  } 



export default TripsDashboard;








    