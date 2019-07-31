import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { register, login, getHome, getUsers, getUser, updateUser, deleteUser } from './actions/actions';
import PeopleForm from './components/PeopleForm';

import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/Login/SignUpForm';
import Trip from './components/Trip/Trip';

import TripsDashboard from './components/TripsDashboard';

function App(props) {


  const loginTest = () => {
    let credss = {
      email: "aa@email.com",
      password: "aabc123",
    }
    props.login(credss)
  }

  const registerTest = () => {
    let creds = {
      name: "Joe Doe",
      email: "aa@email.com",
      password: "aabc123",
      role: "user"
      
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








 
  return (
    <div>
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

export default connect(mapStateToProps, {register, login, getHome, getUsers, getUser, updateUser, deleteUser})(App);
