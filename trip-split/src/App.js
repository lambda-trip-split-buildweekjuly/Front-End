import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { register, login } from './actions/actions';

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
      name: "Johns Doe",
      email: "testt@email.com",
      password: "1234567",
      role: "user"
    }
    props.register(creds)
  }

  return (
    <div className="App">
      <h1>App.js is rendering</h1>
      <button onClick = {loginTest}>Login Test</button>
      <button onClick = {registerTest}>Register Test</button>
    </div>
  );
}

function mapStateToProps(state){
  console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login})(App);
