import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { register, login, getHome, getUsers, getUser, updateUser, deleteUser } from './actions/actions';

import LoginForm from './Components/Login/LoginForm';
import SignUpForm from './Components/Login/SignUpForm';
import Trip from './Components/Trip/Trip';

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
      <LoginForm/>
      <SignUpForm/>
      <Trip/>

 
      
      <button onClick = {loginTest}>Login Test</button>
      <button onClick = {registerTest}>Register Test</button>
      <button onClick = {getTest}>Get test</button>
      <button onClick = {getUsersTest}>Get Users test</button>
      <button onClick = {getUserTest}>Get user test</button>
      <button onClick = {updateUserTest}>Update user test</button>
      <button onClick = {deleteUserTest}>Delete user</button>


    </div>
  );
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login, getHome, getUsers, getUser, updateUser, deleteUser})(App);
