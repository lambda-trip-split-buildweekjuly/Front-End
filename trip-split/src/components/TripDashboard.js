import React from 'react';

function TripDashboard() {
    return (
      <Router>
        <div className="dashboard">
          <nav>
              <Link to="/">New Trip</Link>
              <Link to="/current">Current</Link>            
              <Link to="/past">Past Trips</Link> 
          </nav>
          <Route exact path="/" component={NewTrip} />
          <Route path="/current" component={Current} />
          <Route path="/past" component={PastTrips} />
        </div>
      </Router>
    );
  } 



export default TripDashboard;







    