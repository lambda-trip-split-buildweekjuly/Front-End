import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import { register, login, getHome, getUsers, getUser, updateUser, deleteUser, getTrips, getTrip, postTrip } from './actions/actions';

import PeopleForm from './components/PeopleForm';

import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/Login/SignUpForm';
import Trip from './components/Trip/Trip';

import TripsDashboard from './components/TripsDashboard';


function App(props) {


  const loginTest = () => {
    let credss = {
      email: "test@email.com",
      password: "123456",
    }
    props.login(credss)
  }

  const registerTest = () => {
    let creds = {

      "name": "John Doe",
      "email": "test@email.com",
      "password": "123456",
      "role": "user"

    }
    props.register(creds)
  }

  const getTest = () => {
    props.getHome()
  }

  const getUsersTest = () => {
    props.getUsers()
  }

  const getUserTest = () => {
    props.getUser(2)
  }

  const updateUserTest = () => {
    let update = {
      email: "update@test.com"
    }
    props.updateUser(2, update);
  }

  const deleteUserTest = () => {
    props.deleteUser(1)
  }

  const getTripsTest = () => {
    props.getTrips()
  }

  const getTripTest = () => {
    props.getTrip(0)
  }

  const postTripTest = () => {
    let tripObj = {
      trip_name: "Eleko BEach",
      trip_destination: "Califonia",
      trip_no_of_people: 9,
      trip_date: "17-01-2018"
    }
    props.postTrip(tripObj)
  }



  return (
    <div className="App">
      <h1>App.js is rendering</h1>
      <button onClick = {loginTest}>Login</button>
      <button onClick = {registerTest}>Register</button>
      <button onClick = {getTest}>Get home</button>
      <button onClick = {getUsersTest}>Get Users</button>
      <button onClick = {getUserTest}>Get user</button>
      <button onClick = {updateUserTest}>Update user</button>
      <button onClick = {deleteUserTest}>Delete user</button>
      <button onClick = {getTripsTest}>Get trips</button>
      <button onClick = {getTripTest}>Get trip</button>
      <button onClick = {postTripTest}>Post trip</button>







 

      <h1>App js</h1>
      {/* <LoginForm/>
      <SignUpForm/>
      <Trip/> */}
      <Route exact path="/" component={TripsDashboard}/>
      <Route path="/trip" component={Trip}/>
      <Route path="/people-form" component={PeopleForm}/>
    </div>
  );
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login, getHome, getUsers, getUser, updateUser, deleteUser, getTrips, getTrip, postTrip})(App);
